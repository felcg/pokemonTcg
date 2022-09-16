import React, { useContext, useState } from "react";
import { CardsContext } from "@presentation/context/CardsContext";
import { PokeCardService } from "@application/usecases";
import { AxiosHttpClient } from "@infra/http";
import { pokemonApi } from "@infra/protocols/pokemonTgcApi";
import "./input-styles.scss";

const Input: React.FC = () => {
  const [input, setInput] = useState("");
  const { setCards, setLoading } = useContext(CardsContext);
  const httpClient = new AxiosHttpClient();
  const cardsService = new PokeCardService(pokemonApi.cards, httpClient);
  const disableSubmit = input.length <= 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value;
    setInput(typedValue);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const cards = await cardsService.getCards({
        params: {
          q: `name:${input}`,
        },
      });

      setCards(cards);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inputWrapper" data-testid={`input-wrapper`}>
      <input
        className="inputWrapper__input"
        placeholder="Nome do Pokémon"
        data-testid={"query-input"}
        onFocus={(e) => {
          e.target.readOnly = false;
        }}
        onChange={(e) => handleChange(e)}
        value={input}
      />

      <button
        className="inputWrapper__button"
        onClick={handleSubmit}
        disabled={disableSubmit}
      >
        Buscar
      </button>
    </div>
  );
};

export default Input;
