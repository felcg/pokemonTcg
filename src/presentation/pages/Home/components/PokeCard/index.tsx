import { PokeCard } from "@domain/models";
import React from "react";
import "./styles.scss";
import { TypeColors } from "../../../../utils/typeColors";

type Props = {
  card: PokeCard;
};

const PokeCardComponent: React.FC<Props> = ({ card }) => {
  const getColors = () => {
    const firstColor = TypeColors[card.types[0] as keyof typeof TypeColors];
    const secondColor = TypeColors[card.types[1] as keyof typeof TypeColors];
    let background = "";

    if (card.types[1]) {
      background = `linear-gradient(to bottom, ${firstColor} 50%, ${secondColor} 0%)`;
    } else {
      background = `${firstColor}`;
    }

    console.log("background", background);
    return background;
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
                  background: getColors(),
                }}
              >
                {card.name}
              </p>
              <p
                className="pokeCard__info--id"
                style={{
                  background: getColors(),
                }}
              >
                {card.id}
              </p>
            </div>

            <div className="pokeCard__info--types">
              {card.types.map((type) => {
                return (
                  <p
                    className="pokeCard__info--pill"
                    style={{
                      background: TypeColors[type as keyof typeof TypeColors],
                    }}
                  >
                    {type}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeCardComponent;
