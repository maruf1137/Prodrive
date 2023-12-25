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
    img: "/images/cars&Tours/bus-1.jpg",
  },
  {
    id: 2,
    title: "Business Class",
    img: "/images/cars&Tours/bus-2.jpg",
  },
  {
    id: 3,
    title: "Business Class",
    img: "/images/cars&Tours/bus-3.jpg",
  },
  {
    id: 4,
    title: "Business Class",
    img: "/images/cars&Tours/bus-4.jpg",
  },
  {
    id: 5,
    title: "Business Class",
    img: "/images/cars&Tours/bus-5.jpg",
  },
  {
    id: 6,
    title: "Business Class",
    img: "/images/cars&Tours/bus-1.jpg",
  },
  {
    id: 7,
    title: "Business Class",
    img: "/images/cars&Tours/bus-2.jpg",
  },
  {
    id: 8,
    title: "Business Class",
    img: "/images/cars&Tours/bus-3.jpg",
  },
];
const Taxis = ({ taxisActive, setTaxisActive }) => {
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
    <div class={taxisActive ? "wehicles active" : "wehicles visibility-hidden"}>
      <div class="fleet-carousel">
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
                    <h4 class="fleet-title">
                      <Link href="/booking/car-options">{title}</Link>
                    </h4>
                    <div class="box d-flex items-center justify-content-center">
                      <div class="list">
                        <img src="/images/max-img-1.png" alt="" /> Max . 3
                      </div>
                      <div class="list">
                        <img src="/images/max-img-2.png" alt="" /> Max . 2
                      </div>
                    </div>
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
                <h4 class="fleet-title">
                  <Link href="/booking/car-options">{title}</Link>
                </h4>
                <div class="box d-flex items-center justify-content-center">
                  <div class="list">
                    <img src="/images/max-img-1.png" alt="" /> Max . 3
                  </div>
                  <div class="list">
                    <img src="/images/max-img-2.png" alt="" /> Max . 2
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}
        {/* <div class="owl-carousel">
        </div> */}
      </div>
      <div className="serach-wrapper">
        <button
          className="btn-search"
          onClick={() => setTaxisActive(!taxisActive)}>
          Close
          <svg class="icon">
            <use xlinkHref="/icons.svg#icon-clear"></use>
          </svg>
        </button>
        <Link href="/fleet" className="btn-search">
          Search Taxi
          <svg class="icon">
            <use xlinkHref="/icons.svg#icon-arrow-up-right"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Taxis;
