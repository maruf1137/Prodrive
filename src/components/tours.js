import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const taxisData = [
  {
    id: 1,
    title: "Business Class",
    img: "/images/cars&Tours/tour-1.jpg",
  },
  {
    id: 2,
    title: "Business Class",
    img: "/images/cars&Tours/tour-2.jpg",
  },
  {
    id: 3,
    title: "Business Class",
    img: "/images/cars&Tours/tour-3.jpg",
  },
  {
    id: 4,
    title: "Business Class",
    img: "/images/cars&Tours/tour-4.jpg",
  },
  {
    id: 5,
    title: "Business Class",
    img: "/images/cars&Tours/tour-5.jpg",
  },
  {
    id: 6,
    title: "Business Class",
    img: "/images/cars&Tours/tour-6.jpg",
  },
  {
    id: 7,
    title: "Business Class",
    img: "/images/cars&Tours/tour-7.jpg",
  },
  {
    id: 8,
    title: "Business Class",
    img: "/images/cars&Tours/tour-8.jpg",
  },
];

const Tours = ({ toursActive }) => {
  const breakpoints = {
    250: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <div
      class={
        toursActive
          ? "wehicles tours active"
          : "wehicles tours visibility-hidden"
      }>
      <div class="fleet-carousel" data-columns="6">
        <Swiper
          pagination={false}
          modules={[Pagination]}
          // slidesPerView={3}
          // spaceBetween={30}
          breakpoints={breakpoints}
          className="mySwiper">
          {taxisData.map(({ id, title, img }) => {
            return (
              <SwiperSlide key={id}>
                <div class="fleet-item">
                  <div class="images">
                    <img src={img} alt={title} />
                  </div>
                  <div class="fleet-content">
                    <p className="location">
                      <svg class="icon">
                        <use xlinkHref="/icons.svg#icon-location2"></use>
                      </svg>
                      Kingston​
                    </p>
                    <h4 class="fleet-title">
                      <Link href="/jamaica/tours-list/123">{title}</Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* {taxisData.map(({ id, title, img }) => {
          return (
            <div class="fleet-item" key={id}>
              <div class="images">
                <img src={img} alt={title} />
              </div>
              <div class="fleet-content">
                <p className="location">
                  <svg class="icon">
                    <use xlinkHref="/icons.svg#icon-location2"></use>
                  </svg>
                  Kingston​
                </p>
                <h4 class="fleet-title">
                  <Link href="/jamaica/tours-list/123">{title}</Link>
                </h4>
              </div>
            </div>
          );
        })} */}
        {/* <div class="owl-carousel">
        </div> */}
      </div>
      <div className="serach-wrapper">
        <Link href="/jamaica/tours-list" className="btn-search">
          Search Tour
          <svg class="icon">
            <use xlinkHref="/icons.svg#icon-arrow-up-right"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Tours;
