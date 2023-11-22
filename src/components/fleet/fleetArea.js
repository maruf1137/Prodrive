import React from "react";
import TempleteTitle from "../templeteTitle";
import { vehicleData } from "../data";
import Link from "next/link";

const FleetArea = () => {
  return (
    <section className="our-fleet-area fix-loadmore">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TempleteTitle
              title="The Prodrive Fleet"
              secTitle="The Prodrive Fleet"
              subtitle="We also take custom orders and will help you acquire a specific
          yacht."
            />
          </div>
        </div>
        <div className="row">
          {vehicleData.map((item) => {
            const { id, title, img, subtitle, author, mail, price } = item;
            return (
              <div className="col-md-6" key={id}>
                <div className="select-car al-center">
                  <div className="select-box">
                    <div className="image-car">
                      <img src={img} alt={title} />
                    </div>
                    <div className="box-text">
                      <div className="top">
                        <h3>{title}</h3>
                        <div className="name-car">{subtitle}</div>
                      </div>
                      <div className="content">
                        <ul>
                          <li>
                            <img src="images/booking/people.png" alt="" />{" "}
                            {author}
                          </li>
                          <li>
                            <img src="images/booking/vali.png" alt="" /> {mail}
                          </li>
                        </ul>
                      </div>
                      <div className="bottom">
                        <div className="price">
                          <span>${price}</span> / hour
                        </div>
                        <div className="btn-select">
                          <Link href="/fleet/fleet-details" title="">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="col-md-6">
            <div className="select-car al-center">
              <div className="select-box">
                <div className="image-car">
                  <img src="images/booking/car-01.jpg" alt="" />
                </div>
                <div className="box-text">
                  <div className="top">
                    <h3>Economy Premium</h3>
                    <div className="name-car">
                      Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS, or
                      similar
                    </div>
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <img src="images/booking/people.png" alt="" /> Max . 3
                      </li>
                      <li>
                        <img src="images/booking/vali.png" alt="" /> Max . 2
                      </li>
                    </ul>
                  </div>
                  <div className="bottom">
                    <div className="price">
                      <span>$49</span> / hour
                    </div>
                    <div className="btn-select">
                      <a href="#" title="">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="select-car al-center">
              <div className="select-box">
                <div className="image-car">
                  <img src="images/booking/car-02.jpg" alt="" />
                </div>
                <div className="box-text">
                  <div className="top">
                    <h3>Business Class</h3>
                    <div className="name-car">
                      Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS, or
                      similar
                    </div>
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <img src="images/booking/people.png" alt="" /> Max . 3
                      </li>
                      <li>
                        <img src="images/booking/vali.png" alt="" /> Max . 2
                      </li>
                    </ul>
                  </div>
                  <div className="bottom">
                    <div className="price">
                      <span>$99</span> / hour
                    </div>
                    <div className="btn-select">
                      <a href="#" title="">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="select-car al-center">
              <div className="select-box">
                <div className="image-car">
                  <img src="images/booking/car-03.png" alt="" />
                </div>
                <div className="box-text">
                  <div className="top">
                    <h3>Business Van</h3>
                    <div className="name-car">
                      Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS, or
                      similar
                    </div>
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <img src="images/booking/people.png" alt="" /> Max . 3
                      </li>
                      <li>
                        <img src="images/booking/vali.png" alt="" /> Max . 2
                      </li>
                    </ul>
                  </div>
                  <div className="bottom">
                    <div className="price">
                      <span>$189</span> / hour
                    </div>
                    <div className="btn-select">
                      <a href="#" title="">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="select-car al-center">
              <div className="select-box">
                <div className="image-car">
                  <img src="images/booking/car-04.jpg" alt="" />
                </div>
                <div className="box-text">
                  <div className="top">
                    <h3>First Class</h3>
                    <div className="name-car">
                      Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS, or
                      similar
                    </div>
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <img src="images/booking/people.png" alt="" /> Max . 3
                      </li>
                      <li>
                        <img src="images/booking/vali.png" alt="" /> Max . 2
                      </li>
                    </ul>
                  </div>
                  <div className="bottom">
                    <div className="price">
                      <span>$259</span> / hour
                    </div>
                    <div className="btn-select">
                      <a href="#" title="">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loadmore">
            <a href="#" title="">
              Load More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetArea;
