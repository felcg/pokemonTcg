import { createContext, useState } from "react";
import { PokeCard } from "@domain/models";
import { CardContextInterface, Props } from "@presentation/protocols";

const contextDefaultValues: CardContextInterface = {
  cards: [],
  loading: false,
  setCards: () => {},
  setLoading: () => {},
};

export const CardsContext =
  createContext<CardContextInterface>(contextDefaultValues);

const CardsProvider: React.FC<Props> = ({ children }) => {
  const [cards, setCards] = useState<PokeCard[]>();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <CardsContext.Provider
      value={{
        cards,
        loading,
        setCards,
        setLoading,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
