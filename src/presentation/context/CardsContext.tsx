import { createContext, useState } from "react";
import { PokeCard } from "@domain/models";
import { CardContextInterface, Props } from "@presentation/protocols";

const contextDefaultValues: CardContextInterface = {
  cards: [],
  pageNumber: 1,
  cardsPerPage: 5,
  loading: false,
  setCards: () => {},
  setLoading: () => {},
  setPageNumber: () => {},
  handlePrev: () => {},
  handleNext: () => {},
  handleCardsPerPage: () => {},
};

export const CardsContext =
  createContext<CardContextInterface>(contextDefaultValues);

const CardsProvider: React.FC<Props> = ({ children }) => {
  const [cards, setCards] = useState<PokeCard[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [cardsPerPage, setCardsPerPage] = useState<number>(5);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };
  const handleCardsPerPage = (number: number) => {
    setCardsPerPage(number);
  };

  return (
    <CardsContext.Provider
      value={{
        cards,
        pageNumber,
        cardsPerPage,
        handlePrev,
        handleNext,
        handleCardsPerPage,
        loading,
        setCards,
        setLoading,
        setPageNumber,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
