import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../Slide";

export default function Slider() {

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div 
      className="relative w-full mx-auto overflow-hidden "
      onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
    >
      
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        navigation
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="custom-swiper w-full h-full" 
        // custom-swiper: permite usar estilos personalizados para os botões de navegação
      >
        <SwiperSlide>
          <Slide 
            n={1}
            isActive={activeIndex === 0}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide 
            n={2}
            isActive={activeIndex === 1}/>
        </SwiperSlide>
      </Swiper>
      
      {/* estilos personalizados para os botões de navegação */}
       <style>{`
        .custom-swiper:hover {
          .swiper-button-next, .swiper-button-prev{
            opacity: 0.3;
          }
        }
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          width: 2rem;
          height: 2rem;
          color: white;
          background-color: var(--color-neutral-gray);
          border-radius: 9999px;
          padding: 0.5rem;
          opacity: 0;
          transition: all 0.5s ease-in-out;
        }
        .custom-swiper .swiper-button-next:hover,
        .custom-swiper .swiper-button-prev:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}