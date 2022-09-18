import { Dispatch, SetStateAction } from "react";
import SwiperClass from "swiper";
import { PokeCard } from "@domain/models/pokecard-model";

export type CarouselProps = {
  setSwiperInstance: Dispatch<SetStateAction<SwiperClass>>;
  cards: PokeCard[] | undefined;
};