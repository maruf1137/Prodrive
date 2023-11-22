"use client";
import Link from "next/link";
import React, { useState } from "react";

const navigationData = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Our Fleet",
    items: [
      {
        title: "Our Fleet 03",
        url: "/fleet",
      },
      {
        title: "Our Fleet Single 2",
        url: "/fleet/single-fleet",
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
  },
  {
    id: 4,
    title: "Blog",
    items: [
      {
        title: "Blog Grid",
        url: "/blog",
      },
      {
        title: "Single Blog",
        url: "/blog/12",
      },
    ],
  },
  {
    id: 5,
    title: "Pages",
    items: [
      {
        title: "Booking Car Class",
        url: "/booking/car-class",
      },
      {
        title: "Booking Car Options",
        url: "/booking/car-options",
      },
      {
        title: "Login",
        url: "/booking/login",
      },
      {
        title: "Booking Card",
        url: "/booking/card",
      },
      {
        title: "Booking Checkout",
        url: "/booking/checkout",
      },
    ],
  },
];

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [navigationStateData, setNavigationStateData] =
    useState(navigationData);

  const handleNavigationDropdown = (id) => {
    console.log("first");
    const newData = navigationData.map((item) => {
      if (item.id === id) {
        item.isActive = !item.isActive;
        return item;
      } else {
        return item;
      }
    });
    setNavigationStateData(newData);
  };

  return (
    <header id="header" className="header-03">
      <div className="container-fluid">
        <div className="onclick" onClick={() => setNavigation(true)}>
          <span></span>
          Menu
        </div>
        <ul className="info-contact">
          <li className="vehicle">Wehicles</li>
          <li>(880) 172 380 956</li>
        </ul>
        <div className={navigation ? "navigation active" : "navigation"}>
          <div
            id="main-menu"
            className={navigation ? "main-menu active" : "main-menu"}>
            <ul className="top-menuleft">
              <li className="x_close">
                <a
                  href="#"
                  className="close_x"
                  onClick={() => setNavigation(false)}>
                  <img src="/images/icon/close_x.png" alt="" />
                </a>
              </li>
              <li className="x_logo">
                <Link href="/" title="logo prodrive">
                  <img src="/images/logowhite.png" alt="" />
                </Link>
              </li>
              <li className="x_language">
                <img src="/images/icon/web.png" alt="" />
                <select id="languages">
                  <option value="saab">KR</option>
                  <option value="vw">FR</option>
                  <option value="audi" selected>
                    TR
                  </option>
                </select>
              </li>
            </ul>
            <ul className="menu">
              {navigationStateData.map(
                ({ id, title, url, items, isActive }) => {
                  if (!items) {
                    return (
                      <li className="has-dropdown" key={id}>
                        {/* <span>Home</span> */}
                        <Link href={url} onClick={() => setNavigation(false)}>
                          <span>{title}</span>
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li
                        className="has-dropdown"
                        key={id}
                        onClick={() => handleNavigationDropdown(id)}>
                        <span>{title}</span>
                        <ul
                          className="menu-dropdown"
                          style={
                            isActive
                              ? { display: "block" }
                              : { display: "none" }
                          }>
                          {items.map(({ title, url }, index) => {
                            return (
                              <li key={index}>
                                <Link
                                  href={url}
                                  onClick={() => setNavigation(false)}>
                                  {title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  }
                }
              )}
            </ul>
            <div className="button">
              <a href="#" className="quote" title="">
                Get A Quote
              </a>
              <a href="booking-car-class.html" className="booking" title="">
                Online Booking
              </a>
            </div>
            <ul className="social-ft">
              <li>
                <a href="#" title="Facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Pinterest">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Dribble">
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Google">
                  <i className="fa fa-google" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="logo" className="logo-pro">
          <Link href="/" title="logo prodrive">
            <img src="/images/logo_dark.png" alt="" />
          </Link>
        </div>
        <div className="box-right">
          <div className="login">
            <a href="#">Login/</a>
            <a href="#">Register</a>
          </div>
          <ul className="quocte-booking">
            <li>
              <a href="#">Get A Quote</a>
            </li>
            <li>
              <a href="#">Online Booking</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
