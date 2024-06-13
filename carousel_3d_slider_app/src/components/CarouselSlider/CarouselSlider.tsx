import { Swiper, SwiperSlide } from "swiper/react";
import images from "@data/images.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import ImageCard from "@components/ImageCard/ImageCard";

interface Image {
  id: string;
  url: string;
  title: string;
  description: string;
}
const data = images.map((info) => ({ id: crypto.randomUUID(), ...info }));
const CarouselSlider = () => {
  return (
    <Swiper effect="cards" grabCursor modules={[EffectCards]}>
      {data?.map((info: Image, index) => (
        <SwiperSlide key={index}>
          <ImageCard url={info?.url} alt={info?.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSlider;
