import React from "react";
import { TypeColors, getBackground, getColor } from "@presentation/utils/";
import { PokeCardProps } from "@presentation/protocols/pokecard-props";
import { Link } from "react-router-dom";
import "./styles.scss";

const PokeCardComponent: React.FC<PokeCardProps> = ({ card }) => {
  return (
    <>
      {card && (
        <Link to={"/" + card.id} state={{ card }}>
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
                    background: getBackground(card),
                    color: getColor(card.types),
                  }}
                >
                  {card.name}
                </p>
                <p
                  className="pokeCard__info--id"
                  style={{
                    background: getBackground(card),
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
                          key={type}
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
        </Link>
      )}
    </>
  );
};

export default PokeCardComponent;
