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
    <header id="header" class="header-03">
      <div class="container-fluid">
        <div class="onclick" onClick={() => setNavigation(true)}>
          <span></span>
          Menu
        </div>
        <ul class="info-contact">
          <li class="vehicle">Wehicles</li>
          <li>(880) 172 380 956</li>
        </ul>
        <div class={navigation ? "navigation active" : "navigation"}>
          <div
            id="main-menu"
            class={navigation ? "main-menu active" : "main-menu"}>
            <ul class="top-menuleft">
              <li class="x_close">
                <a
                  href="#"
                  class="close_x"
                  onClick={() => setNavigation(false)}>
                  <img src="/images/icon/close_x.png" alt="" />
                </a>
              </li>
              <li class="x_logo">
                <Link href="/" title="logo prodrive">
                  <img src="/images/logowhite.png" alt="" />
                </Link>
              </li>
              <li class="x_language">
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
            <ul class="menu">
              {navigationStateData.map(
                ({ id, title, url, items, isActive }) => {
                  if (!items) {
                    return (
                      <li class="has-dropdown" key={id}>
                        {/* <span>Home</span> */}
                        <Link href={url} onClick={() => setNavigation(false)}>
                          <span>{title}</span>
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li
                        class="has-dropdown"
                        key={id}
                        onClick={() => handleNavigationDropdown(id)}>
                        <span>{title}</span>
                        <ul
                          class="menu-dropdown"
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
            <div class="button">
              <a href="#" class="quote" title="">
                Get A Quote
              </a>
              <a href="booking-car-class.html" class="booking" title="">
                Online Booking
              </a>
            </div>
            <ul class="social-ft">
              <li>
                <a href="#" title="Facebook">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Pinterest">
                  <i class="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Dribble">
                  <i class="fa fa-dribbble" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Google">
                  <i class="fa fa-google" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="logo" class="logo-pro">
          <Link href="/" title="logo prodrive">
            <img src="/images/logo_dark.png" alt="" />
          </Link>
        </div>
        <div class="box-right">
          <div class="login">
            <a href="#">Login/</a>
            <a href="#">Register</a>
          </div>
          <ul class="quocte-booking">
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
