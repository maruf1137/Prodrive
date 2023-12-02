import React, { useEffect, useState } from "react";
import { vehicleData } from "../data";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const vehicleArea = () => {
  const [info, setInfo] = useState({ id: 0, status: true });

  useEffect(() => {
    console.log(info);
  }, [info]);

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
                  <div className="image-car one-half pb-2">
                    <img src={img} alt={title} />
                    <div className="bottom-area d-flex">
                      <div className="priceBox">
                        <p className="price">${price}</p>
                        <Link
                          href="/booking/car-options"
                          className="btn-select">
                          <span className="infoBox">One Trip</span>
                          SELECT
                        </Link>
                      </div>
                      <div className="priceBox">
                        <div className="d-flex">
                          <p className="old-price">${price}</p>
                          <p className="price">${price}</p>
                        </div>
                        <Link
                          href="/booking/car-options"
                          className="btn-select">
                          <span className="infoBox">Round Trip</span>
                          SELECT
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="box-text one-half">
                    <div className="top">
                      <div className="content">
                        {/* <p>{desc}</p> */}
                        {info.id == id && info.status && (
                          <ul className="desc-list">
                            <li className="d-flex align-items-center">
                              <FaCheck />
                              <span>
                                Lorem ipsum dolor sit amet consectetur.
                              </span>
                            </li>
                            <li className="d-flex align-items-center">
                              <FaCheck />
                              <span>
                                Lorem ipsum dolor sit amet consectetur.
                              </span>
                            </li>
                            <li className="d-flex align-items-center">
                              <FaCheck />
                              <span>
                                Lorem ipsum dolor sit amet consectetur.
                              </span>
                            </li>
                            <li className="d-flex align-items-center">
                              <FaCheck />
                              <span>
                                Lorem ipsum dolor sit amet consectetur.
                              </span>
                            </li>
                          </ul>
                        )}
                      </div>
                      <div className="vihicle-title-box d-flex">
                        <h3>{title}</h3>
                        <div className="box d-flex items-center">
                          <div className="list">
                            <img src="/images/max-img-1.png" alt="" /> {author}
                          </div>
                          <div className="list">
                            <img src="/images/max-img-2.png" alt="" /> {mail}
                          </div>
                        </div>
                      </div>
                      <div className="vehicle-title-box d-flex ">
                        <div className="name-car">{subtitle}</div>
                        <button
                          className="vehicle-title-btn"
                          onClick={() =>
                            setInfo({ id: id, status: !info.status })
                          }>
                          {info.id == id && info.status
                            ? "More Info"
                            : "Less Info"}
                        </button>
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
