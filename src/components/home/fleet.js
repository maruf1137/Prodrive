"use client";
import TempleteTitle from "../templeteTitle";
import dynamic from "next/dynamic";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import OwlCarousel from "react-owl-carousel";
// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
// });

const fleetData = {
  btns: [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Party Bus",
    },
    {
      id: 3,
      title: "Sedan",
    },
    {
      id: 4,
      title: "Stretch Limo",
    },
  ],
  content: [
    {
      id: 1,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 2,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 3,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 4,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 5,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 6,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 7,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 8,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
    {
      id: 9,
      title: "Mercedes Benz S350 L BlueTec",
      img: "/images/fleet/car-01.png",
      author: "Max.3",
      mail: "Max.3",
      automatic: "4 Matic",
    },
  ],
};

const Fleet = () => {
  const [fleetTab, setFleetTab] = useState("All");

  return (
    <section class="block-fleet fleet-section primary-slider change_bg">
      <div class="container">
        <TempleteTitle
          title="The Prodrive Fleet"
          secTitle="The Prodrive Fleet"
          subtitle="We also take custom orders and will help you acquire a specific yacht"
        />
        <ul class="tab_menu">
          {fleetData.btns.map(({ id, title }) => {
            return (
              <li class={fleetTab == title ? "current" : ""} key={id}>
                <a href="#tab-1" onClick={() => setFleetTab(title)}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* item all */}
        <div
          className={
            fleetTab == "All" ? "fleet-carousel active" : "fleet-carousel"
          }>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper">
            {fleetData.content
              .filter((item) => item.id >= 4)
              .map((item) => {
                const { id, title, img, author, automatic, mail } = item;
                return (
                  <SwiperSlide key={id}>
                    <div class="fleet-item">
                      <div class="images px-5">
                        <img src={img} alt={title} />
                      </div>
                      <div class="fleet-content">
                        <h4 class="fleet-title">
                          <a href="#">{title}</a>
                        </h4>
                        <h4 class="automatic">{automatic}</h4>
                        <ul>
                          <li class="author">
                            <a href="#">
                              <img src="/images/icon/author.png" alt="" />
                              {author}
                            </a>
                          </li>
                          <li class="mail">
                            <a href="#">
                              <img src="/images/icon/mail.png" alt="" />
                              {mail}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        {/* item Party Bus */}
        <div
          className={
            fleetTab == "Party Bus" ? "fleet-carousel active" : "fleet-carousel"
          }>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper">
            {fleetData.content
              .filter((item) => item.id >= 4)
              .map((item) => {
                const { id, title, img, author, automatic, mail } = item;
                return (
                  <SwiperSlide key={id}>
                    <div class="fleet-item">
                      <div class="images px-5">
                        <img src={img} alt={title} />
                      </div>
                      <div class="fleet-content">
                        <h4 class="fleet-title">
                          <a href="#">{title}</a>
                        </h4>
                        <h4 class="automatic">{automatic}</h4>
                        <ul>
                          <li class="author">
                            <a href="#">
                              <img src="/images/icon/author.png" alt="" />
                              {author}
                            </a>
                          </li>
                          <li class="mail">
                            <a href="#">
                              <img src="/images/icon/mail.png" alt="" />
                              {mail}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        {/* item Sedan */}
        <div
          className={
            fleetTab == "Sedan" ? "fleet-carousel active" : "fleet-carousel"
          }>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper">
            {fleetData.content
              .filter((item) => item.id >= 4)
              .map((item) => {
                const { id, title, img, author, automatic, mail } = item;
                return (
                  <SwiperSlide key={id}>
                    <div class="fleet-item">
                      <div class="images px-5">
                        <img src={img} alt={title} />
                      </div>
                      <div class="fleet-content">
                        <h4 class="fleet-title">
                          <a href="#">{title}</a>
                        </h4>
                        <h4 class="automatic">{automatic}</h4>
                        <ul>
                          <li class="author">
                            <a href="#">
                              <img src="/images/icon/author.png" alt="" />
                              {author}
                            </a>
                          </li>
                          <li class="mail">
                            <a href="#">
                              <img src="/images/icon/mail.png" alt="" />
                              {mail}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        {/* item Stretch Limo */}
        <div
          className={
            fleetTab == "Stretch Limo"
              ? "fleet-carousel active"
              : "fleet-carousel"
          }>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper">
            {fleetData.content
              .filter((item) => item.id >= 4)
              .map((item) => {
                const { id, title, img, author, automatic, mail } = item;
                return (
                  <SwiperSlide key={id}>
                    <div class="fleet-item">
                      <div class="images px-5">
                        <img src={img} alt={title} />
                      </div>
                      <div class="fleet-content">
                        <h4 class="fleet-title">
                          <a href="#">{title}</a>
                        </h4>
                        <h4 class="automatic">{automatic}</h4>
                        <ul>
                          <li class="author">
                            <a href="#">
                              <img src="/images/icon/author.png" alt="" />
                              {author}
                            </a>
                          </li>
                          <li class="mail">
                            <a href="#">
                              <img src="/images/icon/mail.png" alt="" />
                              {mail}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Fleet;