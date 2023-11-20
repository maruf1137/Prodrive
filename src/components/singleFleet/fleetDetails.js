"use client";
import React, { useState } from "react";
import TempleteTitle from "../templeteTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const fleetTabs = {
  btns: [
    {
      id: 1,
      title: "Distance",
    },
    {
      id: 2,
      title: "Hourly",
    },
    {
      id: 3,
      title: "Flat Rate",
    },
  ],
};

const FleetTabContent = (
  <div id="bk-1" class="schedule-booking">
    <form class="form-booking" method="get" action="#">
      <div class="pick-address">
        <label>Pick Up Address</label>
        <input
          type="text"
          name="pick-up"
          placeholder="From: address, airport, hotel, ..."
        />
      </div>
      <div class="pick-dropday">
        <label>Drop Off Address</label>
        <input
          type="text"
          name="pick-up"
          placeholder="From: address, airport, hotel, ..."
        />
      </div>
      <div class="pick-date">
        <label>Pick Up Date</label>
        <div
          class="date form_date"
          data-date=""
          data-date-format="dd MM yyyy"
          data-link-field="dtp_input2"
          data-link-format="yyyy-mm-dd">
          <input
            size="16"
            type="text"
            value=""
            placeholder="Wed 19 July, 2017"
            readonly
          />
          <span class="add-on">
            <i class="icon-remove"></i>
          </span>
          <span class="add-on">
            <i class="icon-th"></i>
          </span>
        </div>
        <input type="hidden" id="dtp_input2" value="" />
        <br />
      </div>
      <div class="pick-time">
        <label>Pick Up Time</label>
        <div
          class="controls input-append date form_time"
          data-date=""
          data-date-format="hh:ii p"
          data-link-field="dtp_input3"
          data-link-format="hh:ii">
          <input
            size="16"
            type="text"
            value=""
            placeholder="12:25 am"
            readonly
          />
          <span class="add-on">
            <i class="icon-remove"></i>
          </span>
          <span class="add-on">
            <i class="icon-th"></i>
          </span>
        </div>
        <input type="hidden" id="dtp_input3" value="" />
        <br />
      </div>
      <div class="btn-submit">
        <a href="#" class="register_now">
          Reserve Now
          <img src="images/icon/arrow-white.png" alt="" />
        </a>
      </div>
    </form>
  </div>
);

const FleetDetails = () => {
  const [fleetTab, setFleetTab] = useState(1);

  return (
    <section class="our-fleet-single primary-slider">
      <div class="container">
        <TempleteTitle
          title="Ecomnomy Premium Limousine"
          secTitle="Ecomnomy Premium Limousine"
          subtitle="We also take custom orders and will help you acquire a specific
          yacht."
        />
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-8 fix-bst">
            <article class="block-customs-single">
              <div class="featured-customs">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper">
                  <SwiperSlide>
                    <div class="images">
                      <img src="images/fleet/detail_fleet.jpg" alt="" />
                      <a href="#" class="bkings">
                        Online Booking
                        <img src="images/icon/arrow-white.png" alt="" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="images">
                      <img src="images/fleet/detail_fleet.jpg" alt="" />
                      <a href="#" class="bkings">
                        Online Booking
                        <img src="images/icon/arrow-white.png" alt="" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="images">
                      <img src="images/fleet/detail_fleet.jpg" alt="" />
                      <a href="#" class="bkings">
                        Online Booking
                        <img src="images/icon/arrow-white.png" alt="" />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="images">
                      <img src="images/fleet/detail_fleet.jpg" alt="" />
                      <a href="#" class="bkings">
                        Online Booking
                        <img src="images/icon/arrow-white.png" alt="" />
                      </a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="info-fleet">
                <h3 class="title">Hiring a Mercedes E-Class with Prodrive</h3>
                <h5 class="sub-title">Mercedes E Class</h5>
                <p>
                  The Mercedes Benz E Class chauffeur car is the perfect
                  executive level chauffeur car for all types of business trips
                  and airport transfers. The E Class packs safety, luxury and
                  style into one very affordable package. The executive E Class
                  has always been popular and like it is big brother the S Class
                  Limousine features many of the hallmarks that have made
                  Mercedes-Benz one of the finest automobile manufacturers.
                </p>
              </div>
            </article>
            <div class="bottom-content row">
              <div class="col-xs-12 col-sm-12 col-md-4 fix-bst">
                <ul class="detail-info">
                  <li>
                    <span>Passengers</span>
                    <p>4</p>
                  </li>
                  <li>
                    <span>Interior</span>
                    <p>Black Leather</p>
                  </li>
                  <li>
                    <span>DVD Player</span>
                    <p>Yes</p>
                  </li>
                  <li>
                    <span>On Board Wifi</span>
                    <p>Yes</p>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 fix-bst">
                <ul class="detail-info">
                  <li>
                    <span>Passengers</span>
                    <p>4</p>
                  </li>
                  <li>
                    <span>Interior</span>
                    <p>Black Leather</p>
                  </li>
                  <li>
                    <span>DVD Player</span>
                    <p>Yes</p>
                  </li>
                  <li>
                    <span>On Board Wifi</span>
                    <p>Yes</p>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 fix-bst">
                <ul class="detail-info">
                  <li>
                    <span>Passengers</span>
                    <p>4</p>
                  </li>
                  <li>
                    <span>Interior</span>
                    <p>Black Leather</p>
                  </li>
                  <li>
                    <span>DVD Player</span>
                    <p>Yes</p>
                  </li>
                  <li>
                    <span>On Board Wifi</span>
                    <p>Yes</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 fix-bst">
            <div class="sidebar">
              <div class="sdl-booking add-box not-fixed">
                <ul class="tab_booking">
                  {fleetTabs.btns.map(({ id, title }) => {
                    return (
                      <li
                        class={fleetTab == id ? "active" : ""}
                        key={id}
                        onClick={() => setFleetTab(id)}>
                        <a>{title}</a>
                      </li>
                    );
                  })}
                </ul>
                {fleetTabs.btns.map(({ id, title }) => {
                  return (
                    <div
                      key={id}
                      class={
                        fleetTab == id
                          ? "schedule-booking d-block"
                          : "schedule-booking d-none"
                      }>
                      <form class="form-booking" method="get" action="#">
                        <div class="pick-address">
                          <label>Pick Up Address</label>
                          <input
                            type="text"
                            name="pick-up"
                            placeholder="From: address, airport, hotel, ..."
                          />
                        </div>
                        <div class="pick-dropday">
                          <label>Drop Off Address</label>
                          <input
                            type="text"
                            name="pick-up"
                            placeholder="From: address, airport, hotel, ..."
                          />
                        </div>
                        <div class="pick-date">
                          <label>Pick Up Date</label>
                          <div
                            class="date form_date"
                            data-date=""
                            data-date-format="dd MM yyyy"
                            data-link-field="dtp_input2"
                            data-link-format="yyyy-mm-dd">
                            <input
                              size="16"
                              type="text"
                              value=""
                              placeholder="Wed 19 July, 2017"
                              readonly
                            />
                            <span class="add-on">
                              <i class="icon-remove"></i>
                            </span>
                            <span class="add-on">
                              <i class="icon-th"></i>
                            </span>
                          </div>
                          <input type="hidden" id="dtp_input2" value="" />
                          <br />
                        </div>
                        <div class="pick-time">
                          <label>Pick Up Time</label>
                          <div
                            class="controls input-append date form_time"
                            data-date=""
                            data-date-format="hh:ii p"
                            data-link-field="dtp_input3"
                            data-link-format="hh:ii">
                            <input
                              size="16"
                              type="text"
                              value=""
                              placeholder="12:25 am"
                              readonly
                            />
                            <span class="add-on">
                              <i class="icon-remove"></i>
                            </span>
                            <span class="add-on">
                              <i class="icon-th"></i>
                            </span>
                          </div>
                          <input type="hidden" id="dtp_input3" value="" />
                          <br />
                        </div>
                        <div class="btn-submit">
                          <a href="#" class="register_now">
                            Reserve Now
                            <img src="images/icon/arrow-white.png" alt="" />
                          </a>
                        </div>
                      </form>
                    </div>
                  );
                })}
              </div>
              <div class="popular-fleet">
                <div class="items">
                  <div class="content">
                    <h3 class="title">PER HOUR RATE</h3>
                    <div class="price">
                      <span>$29</span> / hour
                    </div>
                    <p>*$3/hour Fuel Sercharges</p>
                  </div>
                  <div class="images">
                    <img src="images/icon/fr1.png" alt="" />
                  </div>
                </div>
                <div class="items">
                  <div class="content">
                    <h3 class="title">PER HOUR RATE</h3>
                    <div class="price">
                      <span>$529</span> / hour
                    </div>
                    <p>*$3/hour Fuel Sercharges</p>
                  </div>
                  <div class="images">
                    <img src="images/icon/fr2.png" alt="" />
                  </div>
                </div>
                <div class="items">
                  <div class="content">
                    <h3 class="title">PER HOUR RATE</h3>
                    <div class="price">
                      <span>$129</span> / hour
                    </div>
                    <p>*depend on picking up area</p>
                  </div>
                  <div class="images">
                    <img src="images/icon/fr3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetDetails;
