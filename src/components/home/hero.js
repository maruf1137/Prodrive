"use client";
import Link from "next/link";
import React, { useState } from "react";

const sdtbBooking = {
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
const Hero = () => {
  const [sdlBookingTab, setSdlBookingTab] = useState(1);

  return (
    <>
      <section class="tp-banner">
        {/* <!-- start REVOLUTION SLIDER --> */}
        <div
          id="rev_slider_1078_1_wrapper"
          class="rev_slider_wrapper fullwidthbanner-container"
          data-alias="classic4export"
          data-source="gallery"
          style={{
            margin: "0px auto",
            backgroundColor: "transparent",
            padding: "0px",
            marginTop: "0px",
            marginBottom: "0px",
          }}>
          {/* <!-- START REVOLUTION SLIDER 5.3.0.2 auto mode --> */}
          <div
            id="rev_slider_1078_1"
            class="rev_slider fullwidthabanner"
            style={{ display: "none" }}
            data-version="5.3.0.2">
            <div class="slotholder"></div>
            <ul>
              {/* <!-- SLIDE  --> */}
              {/* <!-- SLIDE 1 --> */}
              <li
                data-index="rs-3049"
                data-transition="slideremovedown"
                data-slotamount="7"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="Power3.easeInOut"
                data-easeout="Power3.easeInOut"
                data-masterspeed="2000"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Ken Burns"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description="">
                {/* <!-- MAIN IMAGE --> */}
                <img
                  src="/images/slider/home.jpg"
                  alt=""
                  data-bgposition="center center"
                  data-kenburns="off"
                  data-duration="30000"
                  data-ease="Linear.easeNone"
                  data-scalestart="100"
                  data-scaleend="120"
                  data-rotatestart="0"
                  data-rotateend="0"
                  data-offsetstart="0 0"
                  data-offsetend="0 0"
                  data-bgparallax="10"
                  class="rev-slidebg"
                  data-no-retina
                />
                {/* <!-- LAYERS --> */}
                <div
                  class="tp-caption color-white"
                  id="slide-3049-layer-1"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-28','-16','6','6']"
                  data-fontsize="['90','60','40','26']"
                  data-lineheight="['90','60','50','32']"
                  data-fontweight="['400','400','400','400']"
                  data-width="100%"
                  data-height="auto"
                  data-type="text"
                  data-whitespace="normal"
                  data-responsive_offset="on"
                  data-frames='[{"delay":0,"split":"chars","splitdelay":0.05,"speed":1000,"frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 16, whiteSpace: "nowrap", fontWeight: 400 }}>
                  Drive Of Your Life
                </div>
                <div
                  class="tp-caption sub_title"
                  id="slide-3049-layer-1"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['55','55','60','60']"
                  data-fontsize="['23','23','23','23']"
                  data-lineheight="['27','27','27','27']"
                  data-fontweight="['300','300','300','300']"
                  data-width="100%"
                  data-height="auto"
                  data-type="text"
                  data-whitespace="normal"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1100,"speed":3000,"frame":"0","from":"x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;","mask":"x:[100%];y:0;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[15,0,0,0"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[10,0,0,0"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 16, whiteSpace: "nowrap", fontWeight: 300 }}>
                  Offering the Best Limo Service in New York. Experience It Now
                  !
                </div>
              </li>
              {/* <!-- SLIDE 1 --> */}
              <li
                data-index="rs-3050"
                data-transition="slideremovedown"
                data-slotamount="7"
                data-hideafterloop="0"
                data-hideslideonmobile="off"
                data-easein="Power3.easeInOut"
                data-easeout="Power3.easeInOut"
                data-masterspeed="2000"
                data-rotate="0"
                data-saveperformance="off"
                data-title="Ken Burns"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description="">
                {/* <!-- MAIN IMAGE --> */}
                <img
                  src="/images/slider/home.jpg"
                  alt=""
                  data-bgposition="center center"
                  data-kenburns="off"
                  data-duration="30000"
                  data-ease="Linear.easeNone"
                  data-scalestart="100"
                  data-scaleend="120"
                  data-rotatestart="0"
                  data-rotateend="0"
                  data-offsetstart="0 0"
                  data-offsetend="0 0"
                  data-bgparallax="10"
                  class="rev-slidebg"
                  data-no-retina
                />
                {/* <!-- LAYERS --> */}
                <div
                  class="tp-caption color-white"
                  id="slide-3049-layer-1"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['-28','-16','6','6']"
                  data-fontsize="['90','60','40','26']"
                  data-lineheight="['90','60','50','32']"
                  data-fontweight="['400','400','400','400']"
                  data-width="100%"
                  data-height="auto"
                  data-type="text"
                  data-whitespace="normal"
                  data-responsive_offset="on"
                  data-frames='[{"delay":0,"split":"chars","splitdelay":0.05,"speed":1000,"frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 16, whiteSpace: "nowrap", fontWeight: 400 }}>
                  Drive Of Your Life
                </div>
                <div
                  class="tp-caption sub_title"
                  id="slide-3049-layer-1"
                  data-x="['center','center','center','center']"
                  data-hoffset="['0','0','0','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['55','55','60','60']"
                  data-fontsize="['23','23','23','23']"
                  data-lineheight="['27','27','27','27']"
                  data-fontweight="['300','300','300','300']"
                  data-width="100%"
                  data-height="auto"
                  data-type="text"
                  data-whitespace="normal"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1100,"speed":3000,"frame":"0","from":"x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;","mask":"x:[100%];y:0;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                  data-textAlign="['center','center','center','center']"
                  data-paddingtop="[15,0,0,0"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[10,0,0,0"
                  data-paddingleft="[0,0,0,0]"
                  style={{ zIndex: 16, whiteSpace: "nowrap", fontWeight: 300 }}>
                  Offering the Best Limo Service in New York. Experience It Now
                  !
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- END REVOLUTION SLIDER --> */}
        {/* <!-- END REVOLUTION SLIDER --> */}
        <div class="calendar">
          <span class="close">
            <img src="/images/icon/close_x.png" alt="" />
          </span>
          <div class="container">
            <div class="logo-calendar center">
              <Link href="/" title="">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title center">
                  <h2>Please Select Date</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 center calenders">
                <div
                  id="date-range12-container"
                  className="calender-wrapper"></div>
                <div
                  id="date-range11-container"
                  className="calender-wrapper"></div>
                <div
                  id="date-range10-container"
                  className="calender-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="time-open">
          <span class="close">
            <img src="/images/icon/close_x.png" alt="" />
          </span>
          <div class="container">
            <div class="logo-calendar center">
              <Link href="/" title="">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title center">
                  <h2>Pick Up Time</h2>
                  <p>
                    Choose from a wide selection of boats ranging from luxury
                    motor yachts to classic sailing yachts, we have every type
                    of boat available to meet your needs.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 center">
                <div class="box-time first">
                  <select id="hours">
                    <option value="hide">01</option>
                    <option value="january" rel="icon-temperature">
                      02
                    </option>
                    <option value="february">03</option>
                    <option value="march">04</option>
                    <option value="april">05</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 center">
                <div class="box-time">
                  <select id="minutes">
                    <option value="hide">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="book-adress">
          <span class="close">
            <img src="/images/icon/close_x.png" alt="" />
          </span>
          <div class="container">
            <div class="logo-calendar center">
              <Link href="/" title="">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>
          </div>
          <div class="container">
            <div class="form-address">
              <form
                action="#"
                method="get"
                class="search-address"
                accept-charset="utf-8">
                <input
                  type="text"
                  name="search"
                  class="pic-add"
                  placeholder="Pick Up Address"
                />
                <button type="submit" class="waves-effect">
                  <img src="/images/icon/arrowad.png" alt="" />
                </button>
                <ul class="list-address">
                  <li>
                    <a href="#">Most Searched</a>
                  </li>
                  <li>
                    <a href="#">New York</a>
                  </li>
                  <li>
                    <a href="#">Istanbul</a>
                  </li>
                  <li>
                    <a href="#">London</a>
                  </li>
                  <li>
                    <a href="#">Berlin</a>
                  </li>
                  <li>
                    <a href="#">Los Angeles</a>
                  </li>
                  <li>
                    <a href="#">Paris</a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>

        <section class="sdl-booking">
          {/* <ul class="tab_booking">
            {sdtbBooking.btns.map(({ id, title }) => {
              return (
                <li
                  class={id == sdlBookingTab ? "active" : ""}
                  key={id}
                  onClick={() => setSdlBookingTab(id)}>
                  <a>{title}</a>
                </li>
              );
            })}
          </ul> */}
          <div
            class={
              sdlBookingTab == 1
                ? "schedule-booking fw d-block"
                : "schedule-booking fw d-none"
            }>
            <h1 class="text-over">RESERVE NOW</h1>
            <form class="form-booking" method="get" action="#">
              <div class="pick-address js">
                <label>Pick Up Address</label>
                <input
                  type="text"
                  name="pick-up"
                  placeholder="From: address, airport, hotel, ..."
                />
              </div>
              <div class="pick-dropday js">
                <label>Drop Off Address</label>
                <input
                  type="text"
                  name="pick-up"
                  placeholder="From: address, airport, hotel, ..."
                />
              </div>
              <div class="pick-date">
                <label>Pick Up Date</label>
                <input
                  id="date-range12"
                  size="40"
                  value=""
                  placeholder="WEB 19, 2018"
                />
              </div>
              <div class="pick-time js">
                <label>Pick Up Time</label>
                <select>
                  <option value="time-01" selected hidden>
                    12:25 am
                  </option>
                  <option value="time-02" hidden>
                    11:25 am
                  </option>
                  <option value="time-03" hidden>
                    10:25 am
                  </option>
                  <option value="time-04" hidden>
                    9:25 am
                  </option>
                </select>
              </div>
              <div class="btn-submit">
                <a href="#" class="register_now">
                  Reserve Now
                  <img src="/images/icon/arrow-white.png" alt="" />
                </a>
              </div>
            </form>
          </div>
          <div
            class={
              sdlBookingTab == 2
                ? "schedule-booking fw d-block"
                : "schedule-booking fw d-none"
            }>
            <h1 class="text-over">RESERVE NOW</h1>
            <form class="form-booking" method="get" action="#">
              <div class="pick-address js">
                <label>Pick Up Address</label>
                <input
                  type="text"
                  name="pick-up"
                  placeholder="From: address, airport, hotel, ..."
                />
              </div>
              <div class="pick-dropday js">
                <label>Drop Off Address</label>
                <input
                  type="text"
                  name="pick-up"
                  placeholder="From: address, airport, hotel, ..."
                />
              </div>
              <div class="pick-date">
                <label>Pick Up Date</label>
                <input
                  id="date-range10"
                  size="40"
                  value=""
                  placeholder="WEB 19, 2018"
                />
              </div>
              <div class="pick-time js">
                <label>Pick Up Time</label>
                <select>
                  <option value="time-01" selected hidden>
                    12:25 am
                  </option>
                  <option value="time-02" hidden>
                    11:25 am
                  </option>
                  <option value="time-03" hidden>
                    10:25 am
                  </option>
                  <option value="time-04" hidden>
                    9:25 am
                  </option>
                </select>
              </div>
              <div class="btn-submit">
                <a href="#" class="register_now">
                  Reserve Now
                  <img src="/images/icon/arrow-white.png" alt="" />
                </a>
              </div>
            </form>
          </div>
          <div
            class={
              sdlBookingTab == 3
                ? "schedule-booking fw d-block"
                : "schedule-booking fw d-none"
            }>
            <h1 class="text-over">RESERVE NOW</h1>
            <form class="form-booking" method="get" action="#">
              <div class="pick-address js">
                <label>Pick Up Address</label>
                <input
                  type="text"
                  name="pick-up"
                  placeholder="From: address, airport, hotel, ..."
                />
              </div>
              <div class="pick-dropday js">
                <label>Drop Off Address</label>
                <input
                  type="text"
                  name="pick-up"
                  placeholder="From: address, airport, hotel, ..."
                />
              </div>
              <div class="pick-date">
                <label>Pick Up Date</label>
                <input
                  id="date-range11"
                  size="40"
                  value=""
                  placeholder="WEB 19, 2018"
                />
              </div>
              <div class="pick-time js">
                <label>Pick Up Time</label>
                <select>
                  <option value="time-01" selected hidden>
                    12:25 am
                  </option>
                  <option value="time-02" hidden>
                    11:25 am
                  </option>
                  <option value="time-03" hidden>
                    10:25 am
                  </option>
                  <option value="time-04" hidden>
                    9:25 am
                  </option>
                </select>
              </div>
              <div class="btn-submit">
                <a href="#" class="register_now">
                  Reserve Now
                  <img src="/images/icon/arrow-white.png" alt="" />
                </a>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
