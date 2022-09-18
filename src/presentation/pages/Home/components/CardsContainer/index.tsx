import PokeCard from "../PokeCard";
import { CardsContainerProps } from "@presentation/protocols";
import "./styles.scss";

const CardsContainer: React.FC<CardsContainerProps> = (props) => {
  const { cards } = props;
  return (
    <div className="cardsContainer">
      {cards &&
        cards.map((card) => {
          return <PokeCard card={card} />;
        })}
    </div>
  );
};

export default CardsContainer;
