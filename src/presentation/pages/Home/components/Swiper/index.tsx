import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import PokeCard from "../PokeCard";
import "swiper/css";
import "swiper/css/navigation";
import { CarouselProps } from "@presentation/protocols";

const Carousel: React.FC<CarouselProps> = (props) => {
  const { setSwiperInstance, cards } = props;
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      initialSlide={0}
      onSwiper={(swiper) => setSwiperInstance(swiper)}
    >
      {cards?.map((card) => {
        return (
          <SwiperSlide>
            <PokeCard card={card} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
