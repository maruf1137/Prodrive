import React from "react";
import { vehicleData } from "../data";
import Link from "next/link";

const vehicleArea = () => {
  return (
    <section className="select-vehicle-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {vehicleData.map((item) => {
              const { id, title, img, subtitle, desc, author, mail, price } =
                item;
              const s1 = id % 2 == 0 ? true : false;
              return (
                <div className={s1 ? "select-car s1" : "select-car"} key={id}>
                  <div className="image-car one-half">
                    <img src={img} alt={title} />
                  </div>
                  <div className="box-text one-half">
                    <div className="top">
                      <h3>{title}</h3>
                      <div className="name-car">{subtitle}</div>
                    </div>
                    <div className="content">
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
                    <div className="bottom">
                      <div className="price">
                        <span>${price}</span> / hour
                      </div>
                      <div className="btn-select">
                        <Link href="/booking/car-options" title="">
                          SELECT
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
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
