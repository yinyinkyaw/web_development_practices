import { Swiper, SwiperSlide } from "swiper/react";
import images from "@data/images.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import ImageCard from "@components/ImageCard/ImageCard";
import "./coverFlowCarousel.css";

interface Image {
  id: string;
  url: string;
  title: string;
  description: string;
}
const data = images.map((info) => ({ id: crypto.randomUUID(), ...info }));
const CoverFlowCarousel = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 3,
        stretch: -25,
        depth: 30,
        modifier: 4,
      }}
      loop
      spaceBetween={5}
      pagination={true}
      navigation
      modules={[EffectCoverflow, Pagination, Navigation]}
    >
      {data?.map((info: Image, index) => (
        <SwiperSlide key={index}>
          <ImageCard url={info?.url} alt={info?.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CoverFlowCarousel;
