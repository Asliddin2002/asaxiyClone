import { Swiper, SwiperSlide } from "swiper/react";
import "./brand.css";
// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Brand() {
  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="brand"
      >
        <SwiperSlide className="slide">
          <img src={require("../../assets/brand.jpg")} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={require("../../assets/brand2.jpg")} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={require("../../assets/brand.jpg")} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={require("../../assets/brand.jpg")} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={require("../../assets/brand2.jpg")} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={require("../../assets/brand.jpg")} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={require("../../assets/brand.jpg")} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={require("../../assets/brand2.jpg")} alt="brand" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={require("../../assets/brand.jpg")} alt="brand" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
