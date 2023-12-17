import Link from "next/link";
import React from "react";

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
  return (
    <div
      class={
        toursActive
          ? "wehicles tours active"
          : "wehicles tours visibility-hidden"
      }>
      <div class="fleet-carousel" data-columns="6">
        <div class="owl-carousel">
          {taxisData.map(({ id, title, img }) => {
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
                    <a href="#">{title}</a>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="serach-wrapper">
        <Link href="#" className="btn-search">
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
