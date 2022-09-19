import { PokeCard } from "@domain/models";
import { Dispatch, SetStateAction } from "react";

export type CardContextInterface = {
  cards: PokeCard[] | undefined;
  loading: boolean;
  setCards: Dispatch<SetStateAction<PokeCard[] | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}