import CardsProvider, { CardsContext } from "@presentation/context";
import { useContext } from "react";
import Input from "./components/Input";

function Home() {
  const { cards } = useContext(CardsContext);

  return (
    <div>
      <Input />
      {cards?.map((card) => {
        return <div>{card.name}</div>;
      })}
    </div>
  );
}

const HomeWrapper = () => (
  <CardsProvider>
    <Home />
  </CardsProvider>
);

export default HomeWrapper;
