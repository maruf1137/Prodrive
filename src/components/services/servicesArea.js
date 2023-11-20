import React from "react";
import TempleteTitle from "../templeteTitle";

const servicesData = [
  {
    id: 1,
    title: "Chauffeur Service",
    img: "/images/services/01.jpg",
  },
  {
    id: 2,
    title: "Chauffeur Service",
    img: "/images/services/02.jpg",
  },
  {
    id: 3,
    title: "Chauffeur Service",
    img: "/images/services/03.jpg",
  },
  {
    id: 4,
    title: "Chauffeur Service",
    img: "/images/services/04.jpg",
  },
  {
    id: 5,
    title: "Chauffeur Service",
    img: "/images/services/05.jpg",
  },
  {
    id: 6,
    title: "Chauffeur Service",
    img: "/images/services/06.jpg",
  },
];

const ServicesArea = () => {
  return (
    <section class="services-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <TempleteTitle
              title="Our Services"
              secTitle="Our Services"
              subtitle="Our aim is to fill a gap in niche market of Trade"
            />
          </div>
        </div>
        <div class="row">
          {servicesData.map(({ id, title, img }) => {
            return (
              <div class="col-md-4 col-sm-6" key={id}>
                <div class="services-item center">
                  <div class="services-image">
                    <img src={img} alt={title} />
                  </div>
                  <div class="services-content">
                    <h4>
                      <a href="#">{title}</a>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="pagination-area ver-3">
              <ul>
                <li class="prev">
                  <a href="#" class="waves-effect" title="">
                    <img src="images/icon/prev.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" class="waves-effect" title="">
                    1
                  </a>
                </li>
                <li class="active">
                  <a href="#" class="waves-effect" title="">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" class="waves-effect" title="">
                    3
                  </a>
                </li>
                <li>
                  <a href="#" class="waves-effect" title="">
                    ...
                  </a>
                </li>
                <li>
                  <a href="#" class="waves-effect" title="">
                    22
                  </a>
                </li>
                <li class="next">
                  <a href="#" class="waves-effect" title="">
                    <img src="images/icon/next.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
