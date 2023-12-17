import Link from "next/link";
import React from "react";

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
const Taxis = ({ taxisActive }) => {
  return (
    <div class={taxisActive ? "wehicles active" : "wehicles visibility-hidden"}>
      <div class="fleet-carousel" data-columns="6">
        <div class="owl-carousel">
          {taxisData.map(({ id, title, img }) => {
            return (
              <div class="fleet-item" key={id}>
                <div class="images">
                  <img src={img} alt={title} />
                </div>
                <div class="fleet-content">
                  <h4 class="fleet-title">
                    <a href="#">{title}</a>
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
          })}
        </div>
      </div>
      <div className="serach-wrapper">
        <Link href="#" className="btn-search">
          Search Texi
          <svg class="icon">
            <use xlinkHref="/icons.svg#icon-arrow-up-right"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Taxis;
