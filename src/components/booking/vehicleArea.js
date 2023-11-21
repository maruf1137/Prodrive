import React from "react";
import { vehicleData } from "../data";
import Link from "next/link";

const vehicleArea = () => {
  return (
    <section class="select-vehicle-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {vehicleData.map((item) => {
              const { id, title, img, subtitle, desc, author, mail, price } =
                item;
              const s1 = id % 2 == 0 ? true : false;
              return (
                <div class={s1 ? "select-car s1" : "select-car"} key={id}>
                  <div class="image-car one-half">
                    <img src={img} alt={title} />
                  </div>
                  <div class="box-text one-half">
                    <div class="top">
                      <h3>{title}</h3>
                      <div class="name-car">{subtitle}</div>
                    </div>
                    <div class="content">
                      <p>{desc}</p>
                      <ul>
                        <li>
                          <img src="/images/booking/people.png" alt="" />{" "}
                          {author}
                        </li>
                        <li>
                          <img src="/images/booking/vali.png" alt="" /> {mail}
                        </li>
                      </ul>
                    </div>
                    <div class="bottom">
                      <div class="price">
                        <span>${price}</span> / hour
                      </div>
                      <div class="btn-select">
                        <Link href="/booking/car-options" title="">
                          SELECT
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default vehicleArea;
