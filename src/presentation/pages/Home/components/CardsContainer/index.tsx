import PokeCard from "../PokeCard";
import { CardsContainerProps } from "@presentation/protocols";
import "./styles.scss";
import { useContext } from "react";
import { CardsContext } from "@presentation/context";
import { Spinner } from "@presentation/pages/Home/components";

const CardsContainer: React.FC<CardsContainerProps> = (props) => {
  const { cards } = props;
  const { loading } = useContext(CardsContext);
  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <div className="cardsContainer">
          {cards &&
            cards.map((card) => {
              return <PokeCard card={card} />;
            })}
        </div>
      )}
    </div>
  );
};

export default CardsContainer;
