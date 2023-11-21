"use client";
import React, { useEffect, useState } from "react";

const stepsData = [
  {
    id: 1,
    img: "/images/booking/car.png",
    title: "CAR CLASS",
    url: "/booking/car-class",
    isActive: false,
  },
  {
    id: 2,
    img: "/images/booking/options.png",
    title: "OPTIONS",
    url: "/booking/car-class",
    isActive: false,
  },
  {
    id: 3,
    img: "/images/booking/login.png",
    title: "LOGIN",
    url: "/booking/car-class",
    isActive: false,
  },
  {
    id: 4,
    img: "/images/booking/card.png",
    title: "CREADIT CARD",
    url: "/booking/car-class",
    isActive: false,
  },
  {
    id: 5,
    img: "/images/booking/check-out.png",
    title: "CHECK OUT",
    url: "/booking/car-class",
    isActive: false,
  },
];

const StepsBar = ({ stepNo, summaryBarOpen, setSummaryBarOpen }) => {
  const [stepsStateData, setStepsStateData] = useState(stepsData);

  const handleSteps = () => {
    const newStepsData = stepsStateData.map((item) => {
      if (item.id <= stepNo) {
        item.isActive = true;
        return item;
      } else {
        return item;
      }
    });
    setStepsStateData(newStepsData);
  };

  useEffect(() => {
    handleSteps();
  }, [stepNo]);

  return (
    <section class="booking-steps-area mht">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="booking-steps">
              {stepsStateData.map((item) => {
                const { id, img, title, isActive } = item;
                return (
                  <li class={isActive ? "active" : ""} key={id}>
                    <span>{id}</span>
                    <div class="icon">
                      <img src={img} alt={title} />
                    </div>
                    <div class="text">{title}</div>
                  </li>
                );
              })}
            </ul>
            <div
              class={
                summaryBarOpen
                  ? "button-summary-bar open"
                  : "button-summary-bar"
              }
              onClick={() => setSummaryBarOpen(!summaryBarOpen)}>
              <div class="icon">
                <span class="ion-ios-arrow-thin-down"></span>
              </div>
              <p class="show">Select Location & Date</p>
              <p class="hide">Hide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsBar;
