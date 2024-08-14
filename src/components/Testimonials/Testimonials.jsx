import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/bundle"

const Testimonials = () => {
  return (
    <>
      <section className="testimonials container section" id="testimonials">
        <h2 className="section__title">My clients say</h2>
        <span className="section__subtitle">Testimonial</span>

        <Swiper
          className="testimonial__container"
          modules={[Pagination]}
          spaceBetween={24}
          loop = {true}
          grabCursor={true}
          pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        breakpoints={{
            576: {
                slidesPerView:2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            }
        }}
        >
          {Data.map(({ id, image, title, description }) => {
            return (
              <SwiperSlide className="testimonial__card" key={id}>
                <img src={image} alt={title} className="testimonial__img" />
                <h3 className="testimonial__name">{title}</h3>
                <p className="testimonial__description">{description}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
