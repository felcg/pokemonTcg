import { PokeCard } from "@domain/models";
import { TypeColors } from "./typeColors";

export const getBackground = (card: PokeCard) => {
  let background = "";
  if (card.types) {
    const firstType = card.types[0];
    const secondType = card.types[1];
    const firstColor = TypeColors[firstType as keyof typeof TypeColors];
    const secondColor = TypeColors[secondType as keyof typeof TypeColors];

    if (card.types[1]) {
      background = `linear-gradient(to bottom, ${firstColor} 50%, ${secondColor} 0%)`;
    } else {
      background = `${firstColor}`;
    }
  }

  return background;
};