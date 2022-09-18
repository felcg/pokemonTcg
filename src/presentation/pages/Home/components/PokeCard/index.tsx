import React from "react";
import "./styles.scss";
import { TypeColors } from "@presentation/utils/typeColors";
import { PokeCardProps } from "@presentation/protocols/pokecard-props";

const PokeCardComponent: React.FC<PokeCardProps> = ({ card }) => {
  const getBackground = () => {
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
  const getColor = (types: string[]) => {
    const lighterColorTypes = ["Colorless", "Lightning", "Metal"];
    if (types) {
      const isFound = types.some((type) => lighterColorTypes.includes(type));
      return isFound ? "black" : "white";
    }
    return "black";
  };

  return (
    <>
      {card && (
        <div
          className="pokeCard"
          style={{
            backgroundImage: `url(${card.images.small})`,
          }}
        >
          <div className="pokeCard__infoWrapper">
            <div className="pokeCard__info">
              <p
                className="pokeCard__info--name"
                style={{
                  background: getBackground(),
                  color: getColor(card.types),
                }}
              >
                {card.name}
              </p>
              <p
                className="pokeCard__info--id"
                style={{
                  background: getBackground(),
                  color: getColor(card.types),
                }}
              >
                {card.id}
              </p>
            </div>

            <div className="pokeCard__info--types">
              {card.types
                ? card.types.map((type) => {
                    return (
                      <p
                        className="pokeCard__info--pill"
                        style={{
                          background:
                            TypeColors[type as keyof typeof TypeColors],
                          color: getColor(card.types),
                        }}
                      >
                        {type}
                      </p>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeCardComponent;
