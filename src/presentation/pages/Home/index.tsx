import CardsProvider, { CardsContext } from "@presentation/context";
import { useContext, useEffect, useState } from "react";
import { Input, Logo, Carousel, CardsContainer } from "./components";
import { useSwiper } from "swiper/react";
import SwiperClass from "swiper";

function Home() {
  const { cards } = useContext(CardsContext);
  const swiper = useSwiper();
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass>(swiper);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [cards]);

  return (
    <div>
      <Logo />
      <Input swiper={swiperInstance} />

      {isMobile ? (
        <Carousel setSwiperInstance={setSwiperInstance} cards={cards} />
      ) : (
        <CardsContainer cards={cards} />
      )}
    </div>
  );
}

const HomeWrapper = () => (
  <CardsProvider>
    <Home />
  </CardsProvider>
);

export default HomeWrapper;
