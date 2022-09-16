import { PokeCard } from "@domain/models";
import { Dispatch, SetStateAction } from "react";

export type CardContextInterface = {
  cards: PokeCard[] | undefined;
  pageNumber: number;
  cardsPerPage: number;
  loading: boolean;
  setCards: Dispatch<SetStateAction<PokeCard[] | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
  handlePrev: () => void;
  handleNext: () => void;
  handleCardsPerPage: (number: number) => void;
}