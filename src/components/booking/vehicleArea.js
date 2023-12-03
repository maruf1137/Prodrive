import React, { useEffect, useState } from "react";
import { vehicleData } from "../data";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const VehicleArea = () => {
  const [vehicleStateData, setVehicleStateData] = useState(vehicleData);
  // const [info, setInfo] = useState({ id: 0, status: true });

  // useEffect(() => {
  //   console.log(info);
  // }, [info]);

  const handleFlipCard = (id) => {
    const newData = vehicleStateData.map((item) => {
      // item.infoData = false;
      if (item.id == id) {
        if (item.infoData) {
          item.infoData = false;
        } else {
          item.infoData = true;
        }
      }
      return item;
    });
    setVehicleStateData(newData);
  };

  return (
    <section className="select-vehicle-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {vehicleStateData.map((item) => {
              const {
                id,
                title,
                img,
                subtitle,
                desc,
                author,
                mail,
                price,
                infoData,
              } = item;
              const s1 = id % 2 == 0 ? true : false;
              return (
                <div className={s1 ? "select-car s1" : "select-car"} key={id}>
                  <div className="image-car one-half pb-20">
                    <img src={img} alt={title} />
                    <div className="vihicle-title-box mbl-vihicle-title-box mb-20 d-lg-none">
                      <h3>
                        {title}{" "}
                        <button
                          className="vehicle-info-btn d-lg-none"
                          onClick={() => handleFlipCard(id)}>
                          <svg class="icon">
                            <use xlinkHref="/icons.svg#icon-info-with-circle"></use>
                          </svg>
                        </button>
                      </h3>
                      <div className="box d-flex items-center position-relative">
                        <div className="list">
                          <img src="/images/max-img-1.png" alt="" /> {author}
                        </div>
                        <div className="list">
                          <img src="/images/max-img-2.png" alt="" /> {mail}
                        </div>
                      </div>
                    </div>
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
                  <div className="box-text one-half d-none d-lg-block">
                    <div className="top">
                      <div className="vihicle-title-box d-none d-lg-flex ">
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
                      <div className="vehicle-title-box d-none d-lg-flex ">
                        <div className="name-car">{subtitle}</div>
                      </div>
                      <div className="content">
                        {/* <p>{desc}</p> */}
                        <ul className="desc-list d-none d-lg-block">
                          <li className="d-flex align-items-center">
                            <FaCheck />
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <FaCheck />
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <FaCheck />
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <FaCheck />
                            <span>Lorem ipsum dolor sit amet consectetur.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      infoData
                        ? "vehicle-flip-box show d-lg-none"
                        : "vehicle-flip-box d-lg-none"
                    }>
                    <div className="vehicle-title-box">
                      <div className="name-car mb-20">{subtitle}</div>
                      <button
                        className="vehicle-info-btn vehicle-close-btn"
                        onClick={() => handleFlipCard(id)}>
                        <svg class="icon">
                          <use xlinkHref="/icons.svg#icon-clear"></use>
                        </svg>
                      </button>
                    </div>
                    <ul className="desc-list">
                      <li className="d-flex align-items-center">
                        <FaCheck />
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <FaCheck />
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <FaCheck />
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <FaCheck />
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                      </li>
                    </ul>
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

export default VehicleArea;
