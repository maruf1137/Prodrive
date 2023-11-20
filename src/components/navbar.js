"use client";
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
    url: "/",
  },
  {
    id: 3,
    title: "Home",
    url: "/",
  },
  {
    id: 4,
    title: "Home",
    url: "/",
  },
  {
    id: 5,
    title: "Home",
    url: "/",
  },
];

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);

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
                  <img src="images/icon/close_x.png" alt="" />
                </a>
              </li>
              <li class="x_logo">
                <a href="index.html" title="logo prodrive">
                  <img src="images/logowhite.png" alt="" />
                </a>
              </li>
              <li class="x_language">
                <img src="images/icon/web.png" alt="" />
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
              <li class="has-dropdown">
                <span>Home</span>
                <ul class="menu-dropdown">
                  <li>
                    <a href="index.html">Home 01</a>
                  </li>
                  <li>
                    <a href="index2.html">Home 02</a>
                  </li>
                  <li>
                    <a href="index3.html">Home 03</a>
                  </li>
                  <li>
                    <a href="index4.html">Home 04</a>
                  </li>
                  <li>
                    <a href="index5.html">Home 05</a>
                  </li>
                </ul>
              </li>
              <li class="has-dropdown">
                <span>Our Fleet</span>
                <ul class="menu-dropdown">
                  <li>
                    <a href="our-fleet-01.html">Our Fleet 01</a>
                  </li>
                  <li>
                    <a href="our-fleet-02.html">Our Fleet 02</a>
                  </li>
                  <li>
                    <a href="our-fleet-03.html">Our Fleet 03</a>
                  </li>
                  <li>
                    <a href="our-fleet-04.html">Our Fleet 04</a>
                  </li>
                  <li>
                    <a href="our-fleet-05.html">Our Fleet 05</a>
                  </li>
                  <li>
                    <a href="our-fleet-single1.html">Our Fleet Single 01</a>
                  </li>
                  <li>
                    <a href="our-fleet-single2.html">Our Fleet Single 02</a>
                  </li>
                </ul>
              </li>
              <li class="has-dropdown">
                <span>Service Rates</span>
                <ul class="menu-dropdown">
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="services-rates.html">Services Rates</a>
                  </li>
                  <li>
                    <a href="services-single.html">Services Single</a>
                  </li>
                </ul>
              </li>
              <li class="has-dropdown">
                <span>Pages</span>
                <ul class="menu-dropdown">
                  <li>
                    <a href="booking-car-class.html">Booking Car Class</a>
                  </li>
                  <li>
                    <a href="booking-card.html">Booking Card</a>
                  </li>
                  <li>
                    <a href="booking-check-out.html">Booking Checkout</a>
                  </li>
                  <li>
                    <a href="booking-login.html">Booking Login</a>
                  </li>
                  <li>
                    <a href="booking-options.html">Booking Options</a>
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                  <li>
                    <a href="about1.html">About 01</a>
                  </li>
                  <li>
                    <a href="about2.html">About 02</a>
                  </li>
                  <li>
                    <a href="accordion.html">Accordion</a>
                  </li>
                  <li>
                    <a href="alert.html">Alert</a>
                  </li>
                  <li>
                    <a href="button.html">Button</a>
                  </li>
                  <li>
                    <a href="price-table.html">Price Table</a>
                  </li>
                  <li>
                    <a href="progress.html">Progress</a>
                  </li>
                  <li>
                    <a href="tables.html">Tables</a>
                  </li>
                  <li>
                    <a href="tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                </ul>
              </li>
              <li class="has-dropdown">
                <span>Blog</span>
                <ul class="menu-dropdown">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-sidebar.html">Blog Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-fullwidth.html">Blog Fullwidth</a>
                  </li>
                  <li>
                    <a href="blog-fullwidth-sidebar.html">
                      Blog Fullwidth Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li class="has-dropdown">
                <span>Contact</span>
                <ul class="menu-dropdown">
                  <li>
                    <a href="contact1.html">Contact 01</a>
                  </li>
                  <li>
                    <a href="contact2.html">Contact 02</a>
                  </li>
                </ul>
              </li>
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
          <a href="index.html" title="logo prodrive">
            <img src="images/logo_dark.png" alt="" />
          </a>
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
