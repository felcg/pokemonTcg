import { PokeCard } from "@domain/models";
import { CardDetailsProps } from "@presentation/protocols";
import { TypeColors, getColor } from "@presentation/utils";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

const CardsDetails: React.FC<CardDetailsProps> = () => {
  const location = useLocation();
  const { card }: { card: PokeCard } = location.state;
  const getBackground = (type: string) => {
    const color = TypeColors[type as keyof typeof TypeColors];
    const background = `${color}`;

    return background;
  };

  return (
    <div className="cardDetails">
      <img
        className="cardDetails__image"
        src={card?.images.large}
        alt="high definition card"
      />

      <div className="cardDetails__infoContainer">
        <div className="cardDetails__nameAndid">
          <p>
            <strong>Name</strong>: {card?.name}
          </p>
          <p>
            <strong>Id</strong>: {card?.id}
          </p>
        </div>

        <div className="cardDetails__types">
          <strong>Types:</strong>
          {card?.types?.map((type) => {
            return (
              <p
                className="cardDetails__pill"
                style={{
                  background: getBackground(type),
                  color: getColor([type]),
                }}
              >
                {type}
              </p>
            );
          })}
        </div>
        <div className="cardDetails__resistances">
          <strong>Resistances:</strong>
          {card.resistances ? (
            card.resistances.map((resistance) => {
              return (
                <p
                  className="cardDetails__pill"
                  style={{
                    background: getBackground(resistance.type),
                    color: getColor([resistance.type]),
                  }}
                >
                  {resistance.type} {resistance.value}
                </p>
              );
            })
          ) : (
            <p>None</p>
          )}
        </div>
        <div className="cardDetails__weaknesses">
          <strong>Weaknesses:</strong>
          {card.weaknesses ? (
            card.weaknesses.map((weakness) => {
              return (
                <p
                  className="cardDetails__pill"
                  style={{
                    background: getBackground(weakness.type),
                    color: getColor([weakness.type]),
                  }}
                >
                  {weakness.type} {weakness.value}
                </p>
              );
            })
          ) : (
            <p>None</p>
          )}
        </div>

        <div className="cardDetails__attacks">
          <strong>Attacks:</strong>
          {card?.attacks?.map((attack) => {
            return <p className="cardDetails__pill">{attack.name}</p>;
          })}
        </div>
      </div>

      <Link to="/">
        <button className="cardDetails__button">Back</button>
      </Link>
    </div>
  );
};

export default CardsDetails;
