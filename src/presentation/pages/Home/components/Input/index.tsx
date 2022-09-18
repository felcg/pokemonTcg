import React, { useContext, useEffect, useState } from "react";
import { CardsContext } from "@presentation/context/CardsContext";
import { PokeCardService } from "@application/usecases";
import { AxiosHttpClient } from "@infra/http";
import { pokemonApi } from "@infra/protocols/pokemonTgcApi";
import { InputProps } from "@presentation/protocols";
import "./styles.scss";

const Input: React.FC<InputProps> = (props) => {
  const [input, setInput] = useState("");
  const { setCards, setLoading } = useContext(CardsContext);
  const { swiper } = props;
  const httpClient = new AxiosHttpClient();
  const cardsService = new PokeCardService(pokemonApi.cards, httpClient);
  const disableSubmit = input.length <= 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedValue = event.target.value;
    setInput(typedValue);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      setLoading(true);
      const cards = await cardsService.getCards({
        params: {
          q: `name:${input}`,
          page: 1,
          pageSize: 250,
          orderBy: "name",
        },
      });

      setCards(cards);
      swiper.slideTo(0);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inputWrapper" data-testid={`input-wrapper`}>
      <form className="inputWrapper__form" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default Input;
