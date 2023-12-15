"use client";
import Calender from "@/components/Calender";
import TourList from "@/components/TourList";
import React, { useEffect, useState, useRef } from "react";
import SingleTourForm from "./singleTourForm";

const tabBtnsData = [
  {
    id: 1,
    btn: "Overview",
  },
  {
    id: 2,
    btn: "Included",
  },
  {
    id: 3,
    btn: "Itinerary",
  },
  {
    id: 4,
    btn: "Calendar",
  },
  {
    id: 5,
    btn: "FAQ",
  },
  {
    id: 6,
    btn: "Reviews",
  },
  {
    id: 7,
    btn: "Book",
  },
];

const TourDetail = () => {
  const targetSectionRef = useRef(null);
  const [isStickyTab, setIsStickyTab] = useState(false);
  const [targetSectionFromTop, setTargetSectionFromTop] = useState(null);
  const [scrollY, setScrollY] = useState(null);
  const [tabsBtn, setTabsBtn] = useState(1);

  const Accordion = (function () {
    function init() {
      const targets = document.querySelectorAll(".js-accordion");
      if (!targets) return;

      for (let i = 0; i < targets.length; i++) {
        const items = targets[i].querySelectorAll(".accordion__item");

        for (let l = 0; l < items.length; l++) {
          const button = items[l].querySelector(".accordion__button");
          const content = items[l].querySelector(".accordion__content");
          const titleChange = items[l].querySelector(
            "[data-open-change-title]"
          );
          let buttonOrigTitle;
          let buttonNewTitle;

          if (items[l].classList.contains("js-accordion-item-active")) {
            items[l].classList.toggle("is-active");
            content.style.maxHeight = content.scrollHeight + "px";
          }

          if (titleChange) {
            buttonOrigTitle = titleChange.innerHTML;
            buttonNewTitle = titleChange.getAttribute("data-open-change-title");
          }

          button.addEventListener("click", (e) => {
            items[l].classList.toggle("is-active");

            if (titleChange) {
              if (items[l].classList.contains("is-active")) {
                titleChange.innerHTML = buttonNewTitle;
              } else {
                titleChange.innerHTML = buttonOrigTitle;
              }
            }

            if (content.style.maxHeight) {
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
          });
        }
      }
    }

    return {
      init: init,
    };
  })();

  const Tabs = (function () {
    function init() {
      const targets = document.querySelectorAll(".js-tabs");
      if (!targets) return;

      targets.forEach((el) => {
        singleTab(el);
      });
    }

    function singleTab(target) {
      const controls = target.querySelector(".js-tabs-controls");
      const controlsItems = target.querySelectorAll(
        ".js-tabs-controls .js-tabs-button"
      );
      const content = target.querySelector(".js-tabs-content");

      for (let l = 0; l < controlsItems.length; l++) {
        const el = controlsItems[l];

        el.addEventListener("click", (e) => {
          const selector = el.getAttribute("data-tab-target");

          controls
            .querySelector(".is-tab-el-active")
            .classList.remove("is-tab-el-active");
          content
            .querySelector(".is-tab-el-active")
            .classList.remove("is-tab-el-active");

          el.classList.add("is-tab-el-active");
          content.querySelector(selector).classList.add("is-tab-el-active");
        });
      }
    }

    return {
      init: init,
    };
  })();

  function calendarSlider() {
    new Swiper(".js-calendar-slider", {
      speed: 600,
      autoHeight: true,
      spaceBetween: 50,

      slidesPerView: 1,
      breakpoints: {
        991: { slidesPerView: 2 },
      },

      navigation: {
        prevEl: ".js-calendar-prev",
        nextEl: ".js-calendar-next",
      },
    });

    new Swiper(".js-calendar-slider-2", {
      speed: 600,
      autoHeight: true,
      spaceBetween: 50,
      slidesPerView: 1,
      navigation: {
        prevEl: ".js-calendar-prev",
        nextEl: ".js-calendar-next",
      },
    });
  }

  function closeAllDropdowns() {
    const targets = document.querySelectorAll(".js-form-dd");
    if (!targets) return;

    targets.forEach((el) => {
      if (el.querySelector(".is-active")) {
        el.querySelector(".is-active").classList.remove("is-active");
      }
    });

    const alldds = document.querySelectorAll(".js-dropdown.is-active");

    alldds.forEach((el) => {
      el.classList.remove("is-active");
    });
  }
  const [date, setdate] = useState("hjgh");
  function calendarInteraction() {
    const target = document.querySelectorAll(".js-calendar");
    if (!target) return;

    target.forEach((elTarget) => {
      const gridCells = elTarget.querySelectorAll(".table-calendar__grid > *");

      const firstDate = elTarget.querySelector(".js-first-date");
      const lastDate = elTarget.querySelector(".js-last-date");

      let completeState = false;
      let firstItem = false;
      let lastItem = false;

      gridCells.forEach((el, i) => {
        el.addEventListener("click", () => {
          el.classList.add("-is-active");

          if (firstItem && getIndex(firstItem) > getIndex(el)) {
            lastItem = firstItem;
            firstItem = el;
          }

          if (firstItem && !lastItem) {
            lastItem = el;
          }

          if (!firstItem) {
            firstItem = el;
          }

          if (completeState) {
            firstItem = false;
            lastItem = false;

            const array = elTarget.querySelectorAll(".-is-active");
            array.forEach((el2) => {
              el2.classList.remove("-is-active");
            });

            const array2 = elTarget.querySelectorAll(".-is-in-path");
            array2.forEach((el2) => {
              el2.classList.remove("-is-in-path");
            });

            completeState = false;
          } else if (firstItem && lastItem) {
            const iterationCount = Math.abs(
              getIndex(firstItem) - getIndex(lastItem)
            );

            for (let l = 1; l < iterationCount; l++) {
              const item = elTarget.querySelector(
                `[data-index="${getIndex(firstItem) + l}"]`
              );
              item.classList.add("-is-in-path");
            }

            if (firstDate) {
              firstDate.innerHTML = `${
                firstItem.querySelector(".js-date").innerHTML
              } ${firstItem.getAttribute("data-month")} -`;
            }

            if (lastDate) {
              lastDate.innerHTML = `${
                lastItem.querySelector(".js-date").innerHTML
              } ${lastItem.getAttribute("data-month")}`;
            }

            completeState = true;
            closeAllDropdowns();
          }
        });
      });
    });

    function getIndex(element) {
      return parseInt(element.getAttribute("data-index"));
    }
  }

  const handleTabChange = (id) => {
    setTabsBtn(id);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Call the init function from the Accordion object
    Accordion.init();
    Tabs.init();
    // sectionSlider();
    calendarSlider();
    calendarInteraction();
  }, []);

  useEffect(() => {
    const sectionTop = targetSectionRef.current.getBoundingClientRect().top;
    setTargetSectionFromTop(sectionTop);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY >= targetSectionFromTop) {
      setIsStickyTab(true);
    } else {
      setIsStickyTab(false);
    }
  }, [targetSectionFromTop, scrollY]);

  return (
    <div className="mt-header2 jamaica-page singletour-page">
      <div className="container">
        <div className="row justify-between py-30 mt-80">
          <div className="col-auto">
            <div className="text-14">THE 10 BEST Phuket Tours & Excursions</div>
          </div>
        </div>
      </div>

      <section className="tourSingleHero5">
        <div className="tourSingleHero5__image">
          <div
            className="js-section-slider"
            data-gap="0"
            data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1"
            data-loop
            data-nav-prev="js-slider1-prev"
            data-nav-next="js-slider1-next">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="/img/tourSingle/3/1.png" alt="image" />
              </div>
              <div className="swiper-slide">
                <img src="/img/tourSingle/3/1.png" alt="image" />
              </div>
              <div className="swiper-slide">
                <img src="/img/tourSingle/3/1.png" alt="image" />
              </div>
            </div>

            <div className="navTourSingle">
              <button className="navTourSingle__button bg-white js-slider1-prev">
                <i className="icon-arrow-left text-14"></i>
              </button>

              <button className="navTourSingle__button bg-white js-slider1-next">
                <i className="icon-arrow-right text-14"></i>
              </button>
            </div>
          </div>

          <div className="icon">
            <svg
              width="1800"
              height="40"
              viewBox="0 0 1800 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M-2.7895e-05 26.1652C-2.7895e-05 26.1652 46.3492 19.8469 88.8889 19.4061C132.063 18.9653 168.889 19.4061 221.587 21.6102C293.333 24.5489 431.746 36.4509 505.397 29.9856C579.048 23.5203 582.222 23.2265 619.683 19.1122C661.587 14.4102 746.667 5.00616 852.063 5.44698C964.444 5.88779 1168.25 29.8387 1252.06 28.6632C1260.95 28.5162 1293.97 27.4877 1318.73 25.7244C1342.86 23.9612 1378.41 20.1408 1426.67 18.8183C1446.98 18.2306 1479.37 17.202 1516.83 17.4959C1526.35 17.6428 1556.83 18.0836 1593.02 19.8469C1629.21 21.6102 1662.86 24.402 1693.33 25.2836C1758.73 26.8999 1800 24.5489 1800 24.5489V40.4182H-2.7895e-05V26.1652ZM144.127 23.8142C148.571 25.2836 156.825 24.402 171.429 24.402C186.032 24.402 210.159 26.1652 208.254 26.0183C206.349 25.8714 188.571 23.8142 170.159 23.2265C151.111 22.4918 140.318 22.3448 144.127 23.8142ZM260.952 27.7815C260.952 27.7815 276.19 28.0754 296.508 29.104C316.825 30.2795 361.905 33.2183 392.381 34.2468C444.444 35.8631 492.698 34.2468 488.254 34.0999C483.175 33.9529 427.302 34.9815 376.508 32.4836C355.556 31.455 317.46 29.2509 297.778 28.5162C276.825 27.6346 260.952 27.7815 260.952 27.7815ZM624.127 27.9285C613.333 28.9571 708.571 21.0224 741.587 18.9653C754.921 18.0836 780.952 16.6143 805.079 16.0265C829.841 15.4388 861.587 15.4388 860.952 15.2918C860.952 14.9979 824.127 14.1163 789.841 15.2918C755.556 16.4673 756.825 16.9081 741.587 17.6428C717.46 18.8183 634.921 26.8999 624.127 27.9285ZM535.873 30.2795C534.603 30.2795 540.952 30.8672 566.349 28.6632C591.746 26.4591 608.889 23.5203 610.159 23.2265C611.429 23.0795 587.936 25.8714 568.254 27.6346C549.206 29.3979 536.508 30.2795 535.873 30.2795ZM3.17458 31.6019C3.8095 31.455 15.238 29.9856 33.6507 27.9285C52.0634 25.8714 77.4603 23.8142 76.1904 23.9612C74.9206 23.9612 53.9683 24.8428 29.2064 27.6346C4.44445 30.4264 2.53965 31.7489 3.17458 31.6019ZM1601.27 23.3734C1600.63 23.6673 1613.33 23.6673 1629.84 25.1367C1646.35 26.606 1664.13 27.4877 1679.37 28.0754C1704.76 29.2509 1753.65 27.9285 1751.11 27.7815C1749.21 27.6346 1699.05 28.2224 1671.75 26.753C1657.78 26.0183 1656.51 26.0183 1635.56 24.402C1614.6 22.7857 1601.9 22.9326 1601.27 23.3734ZM1336.51 26.8999C1333.97 27.0469 1314.29 29.2509 1283.17 30.7203C1252.06 32.3366 1226.67 31.455 1226.67 31.8958C1226.67 32.3366 1233.02 33.2183 1266.03 32.3366C1299.05 31.455 1339.05 26.753 1336.51 26.8999ZM1345.4 30.5734C1344.13 30.4264 1323.81 32.4836 1309.21 33.0713C1294.6 33.5121 1297.14 33.806 1297.14 33.9529C1297.14 34.0999 1304.13 34.2468 1314.29 33.6591C1325.08 32.9244 1346.67 30.7203 1345.4 30.5734ZM1205.71 33.9529C1205.08 33.6591 1183.49 32.7774 1170.16 31.3081C1156.83 29.8387 1158.73 30.4264 1158.1 30.5734C1157.46 30.7203 1163.17 31.7489 1173.33 32.4836C1183.49 33.3652 1206.35 34.2468 1205.71 33.9529ZM1384.76 24.1081C1385.4 23.6673 1382.86 23.3734 1372.7 24.402C1362.54 25.4305 1356.19 26.3122 1358.73 26.1652C1361.27 26.0183 1364.44 25.5775 1374.6 24.9897C1385.4 24.402 1384.13 24.5489 1384.76 24.1081ZM1580.95 22.1979C1582.22 22.1979 1567.62 21.0224 1560 20.8755C1552.38 20.7285 1547.3 20.7285 1547.3 21.1693C1547.3 21.6102 1547.94 21.904 1557.46 21.7571C1567.62 21.6102 1579.68 22.1979 1580.95 22.1979ZM833.651 9.4143C834.286 9.26736 848.889 9.85512 881.27 9.85512C913.016 9.85512 967.619 13.3816 990.476 14.9979C1013.33 16.6143 926.984 9.26736 885.714 8.97349C844.444 8.67961 833.016 9.56124 833.651 9.4143Z"
                fill="white"
              />
              <path
                d="M88.2542 13.9694C88.8891 14.1163 117.461 13.5285 133.969 13.9694C180.318 14.9979 241.905 18.6714 239.365 18.2306C236.826 17.7897 152.381 13.6755 131.429 13.3816C100.318 12.7938 87.6193 13.9694 88.2542 13.9694Z"
                fill="white"
              />
              <path
                d="M356.191 26.0183C357.461 26.1652 384.763 27.4876 416.509 27.7815C448.255 28.0754 497.144 26.8999 494.604 27.0468C492.699 27.1938 457.144 29.6917 410.16 28.8101C363.176 27.9285 354.922 25.8713 356.191 26.0183Z"
                fill="white"
              />
              <path
                d="M501.587 20.7285C502.222 20.8754 488.889 22.1979 481.27 22.3448C473.651 22.4917 468.572 22.3448 468.572 21.904C468.572 21.4632 469.206 21.1693 478.73 21.3162C489.524 21.4632 500.953 20.5815 501.587 20.7285Z"
                fill="white"
              />
              <path
                d="M523.81 24.8428C523.81 24.9898 551.746 23.0796 563.81 21.6102C575.873 20.2878 603.175 17.0551 602.54 17.0551C601.905 16.9082 575.873 19.4061 562.54 20.8755C549.207 22.3449 523.81 24.6959 523.81 24.8428Z"
                fill="white"
              />
              <path
                d="M819.047 1.1859C819.682 1.33284 848.254 0.745088 864.761 1.1859C911.111 2.21447 972.698 5.88792 970.158 5.44711C967.619 5.00629 883.174 0.892027 862.222 0.598151C831.111 0.0103991 818.412 1.03896 819.047 1.1859Z"
                fill="white"
              />
              <path
                d="M1533.97 12.0593C1533.97 12.0593 1526.35 12.5001 1515.56 12.2062C1504.76 11.9123 1478.73 10.8838 1463.49 11.1776C1436.83 11.7654 1416.51 15.145 1419.05 14.998C1421.59 14.998 1446.35 11.7654 1473.65 12.2062C1485.08 12.3531 1506.03 12.9409 1516.19 12.794C1526.35 12.647 1533.97 12.0593 1533.97 12.0593Z"
                fill="white"
              />
              <path
                d="M1320.63 21.904C1319.36 21.757 1307.94 23.0795 1293.33 23.5203C1278.73 23.8141 1280 23.9611 1280 24.255C1280 24.4019 1291.43 24.8427 1301.59 24.255C1311.75 23.5203 1321.9 22.0509 1320.63 21.904Z"
                fill="white"
              />
              <path
                d="M1700.95 21.0223C1700.95 21.1692 1673.65 21.0223 1658.41 20.2876C1643.18 19.5529 1626.67 17.4958 1626.67 17.3488C1626.67 17.2019 1643.81 18.5243 1659.05 19.406C1673.65 20.2876 1700.32 20.8753 1700.95 21.0223Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row x-gap-10 y-gap-10 items-center">
                <div className="col-auto">
                  <button className="button -accent-1 text-14 py-5 px-15 bg-white text-accent-1 rounded-200">
                    Bestseller
                  </button>
                </div>
                <div className="col-auto">
                  <button className="button -accent-1 text-14 py-5 px-15 bg-light-1 rounded-200">
                    Free cancellation
                  </button>
                </div>
              </div>

              <h2 className="text-40 sm:text-30 lh-14 mt-200">
                Phi Phi Islands Adventure Day Trip with
                <br />
                Seaview Lunch
              </h2>

              <div className="row y-gap-20 justify-between items-center pt-20">
                <div className="col-auto">
                  <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                      <div className="d-flex items-center text-white">
                        <div className="d-flex x-gap-5 pr-10">
                          <i className="flex-center icon-star text-yellow-2 text-12"></i>
                          <i className="flex-center icon-star text-yellow-2 text-12"></i>
                          <i className="flex-center icon-star text-yellow-2 text-12"></i>
                          <i className="flex-center icon-star text-yellow-2 text-12"></i>
                          <i className="flex-center icon-star text-yellow-2 text-12"></i>
                        </div>
                        4.8 (269)
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex items-center text-white">
                        <i className="icon-pin text-16 mr-5"></i>
                        Paris, France
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex items-center text-white">
                        <i className="icon-reservation text-16 mr-5"></i>
                        30K+ booked
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex x-gap-30 y-gap-10">
                    <a href="#" className="d-flex items-center">
                      <i className="icon-share flex-center text-16 mr-10"></i>
                      Share
                    </a>

                    <a href="#" className="d-flex items-center ">
                      <i className="icon-heart flex-center text-16 mr-10"></i>
                      Wishlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md js-pin-container">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-lg-8">
              <div className="tabs -tourSingle js-tabs">
                <div
                  className={
                    isStickyTab
                      ? "tabs__controls row x-gap-30 y-gap-10 js-tabs-controls is-sticky"
                      : "tabs__controls row x-gap-30 y-gap-10 js-tabs-controls"
                  }
                  ref={targetSectionRef}>
                  {tabBtnsData.map(({ id, btn }) => {
                    return (
                      <div className="col-auto" key={id}>
                        <button
                          className={`tabs__button text-30 md:text-20 fw-700 ${
                            btn == "Book" && "book-btn"
                          } ${tabsBtn == id && "is-tab-el-active"}`}
                          onClick={() => handleTabChange(id)}>
                          {btn}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="tabs__content pt-40 js-tabs-content">
                  <div
                    className={`tabs__pane ${
                      tabsBtn == 1 && "is-tab-el-active"
                    }`}>
                    <div className="row y-gap-20 justify-between items-center layout-pb-md">
                      <div className="col-lg-3 col-6">
                        <div className="d-flex items-center">
                          <div className="flex-center size-50 rounded-12 border-1">
                            <i className="text-20 icon-clock"></i>
                          </div>

                          <div className="ml-10">
                            <div className="lh-16">Duration</div>
                            <div className="text-14 text-light-2 lh-16">
                              3 days
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-6">
                        <div className="d-flex items-center">
                          <div className="flex-center size-50 rounded-12 border-1">
                            <i className="text-20 icon-teamwork"></i>
                          </div>

                          <div className="ml-10">
                            <div className="lh-16">Group Size</div>
                            <div className="text-14 text-light-2 lh-16">
                              10 people
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-6">
                        <div className="d-flex items-center">
                          <div className="flex-center size-50 rounded-12 border-1">
                            <i className="text-20 icon-birthday-cake"></i>
                          </div>

                          <div className="ml-10">
                            <div className="lh-16">Ages</div>
                            <div className="text-14 text-light-2 lh-16">
                              18-99 yrs
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-6">
                        <div className="d-flex items-center">
                          <div className="flex-center size-50 rounded-12 border-1">
                            <i className="text-20 icon-translate"></i>
                          </div>

                          <div className="ml-10">
                            <div className="lh-16">Languages</div>
                            <div className="text-14 text-light-2 lh-16">
                              English, Japanese
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-30">Tour Overview</h2>
                    <p className="mt-20">
                      The Phi Phi archipelago is a must-visit while in Phuket,
                      and this speedboat trip whisks you around the islands in
                      one day. Swim over the coral reefs of Pileh Lagoon, have
                      lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit
                      Monkey Beach and Maya Bay, immortalized in "The Beach."
                      Boat transfers, snacks, buffet lunch, snorkeling
                      equipment, and Phuket hotel pickup and drop-off all
                      included.
                    </p>

                    <h3 className="text-20 fw-500 mt-20">Tour Highlights</h3>
                    <ul className="ulList mt-20">
                      <li>
                        Experience the thrill of a speedboat to the stunning Phi
                        Phi Islands
                      </li>
                      <li>
                        Be amazed by the variety of marine life in the
                        archepelago
                      </li>
                      <li>
                        Enjoy relaxing in paradise with white sand beaches and
                        azure turquoise water
                      </li>
                      <li>
                        Feel the comfort of a tour limited to 35 passengers
                      </li>
                      <li>
                        Catch a glimpse of the wild monkeys around Monkey Beach
                      </li>
                    </ul>
                  </div>

                  <div
                    className={`tabs__pane ${
                      tabsBtn == 2 && "is-tab-el-active"
                    }`}>
                    <h2 className="text-30">What's included</h2>

                    <div className="row x-gap-130 y-gap-20 pt-20">
                      <div className="col-lg-6">
                        <div className="y-gap-15">
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Beverages, drinking water, morning tea and buffet
                            lunch
                          </div>
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Local taxes
                          </div>
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Hotel pickup and drop-off by air-conditioned minivan
                          </div>
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            InsuranceTransfer to a private pier
                          </div>
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Soft drinks
                          </div>
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Tour Guide
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="y-gap-15">
                          <div className="d-flex">
                            <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
                            Towel
                          </div>
                          <div className="d-flex">
                            <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
                            Tips
                          </div>
                          <div className="d-flex">
                            <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
                            Alcoholic Beverages
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tabs__pane ${
                      tabsBtn == 3 && "is-tab-el-active"
                    }`}>
                    <h2 className="text-30">Itinerary</h2>

                    <div className="mt-30">
                      <div className="roadmap">
                        <div className="roadmap__item">
                          <div className="roadmap__iconBig">
                            <i className="icon-pin"></i>
                          </div>
                          <div className="roadmap__wrap">
                            <div className="roadmap__title">
                              Day 1: Airport Pick Up
                            </div>
                          </div>
                        </div>

                        <div className="roadmap__item">
                          <div className="roadmap__icon"></div>
                          <div className="roadmap__wrap">
                            <div className="roadmap__title">
                              Day 2: Temples & River Cruise
                            </div>
                            <div className="roadmap__content">
                              Like on all of our trips, we can collect you from
                              the airport when you land and take you directly to
                              your hotel. The first Day is just a check-in Day
                              so you have this freedom to explore the city and
                              get settled in.
                            </div>
                          </div>
                        </div>

                        <div className="roadmap__item">
                          <div className="roadmap__icon"></div>
                          <div className="roadmap__wrap">
                            <div className="roadmap__title">
                              Day 3: Massage &amp; Overnight Train
                            </div>
                          </div>
                        </div>

                        <div className="roadmap__item">
                          <div className="roadmap__icon"></div>
                          <div className="roadmap__wrap">
                            <div className="roadmap__title">
                              Day 4: Khao Sok National Park
                            </div>
                          </div>
                        </div>

                        <div className="roadmap__item">
                          <div className="roadmap__icon"></div>
                          <div className="roadmap__wrap">
                            <div className="roadmap__title">
                              Day 5: Travel to Koh Phangan
                            </div>
                          </div>
                        </div>

                        <div className="roadmap__item">
                          <div className="roadmap__icon"></div>
                          <div className="roadmap__wrap">
                            <div className="roadmap__title">
                              Day 6: Morning Chill &amp; Muay Thai Lesson
                            </div>
                          </div>
                        </div>

                        <div className="roadmap__item">
                          <div className="roadmap__iconBig">
                            <i className="icon-flag"></i>
                          </div>
                          <div className="roadmap__wrap">
                            <div className="roadmap__title">
                              Day 7: Island Boat Trip
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tabs__pane ${
                      tabsBtn == 4 && "is-tab-el-active"
                    }`}>
                    <h2 className="text-30">Availability Calendar</h2>
                    <Calender />

                    <span>{date}</span>
                  </div>

                  <div
                    className={`tabs__pane ${
                      tabsBtn == 5 && "is-tab-el-active"
                    }`}>
                    <h2 className="text-30">FAQ</h2>

                    <div className="accordion -simple row y-gap-20 mt-30 js-accordion">
                      <div className="col-12">
                        <div className="accordion__item px-20 py-15 border-1 rounded-12">
                          <div className="accordion__button d-flex items-center justify-between">
                            <div className="button text-16 text-dark-1">
                              Can I get the refund?
                            </div>

                            <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                              <i className="icon-plus"></i>
                              <i className="icon-minus"></i>
                            </div>
                          </div>

                          <div className="accordion__content">
                            <div className="pt-20">
                              <p>
                                Phang Nga Bay Sea Cave Canoeing & James Bond
                                Island w/ Buffet Lunch by Big Boat cancellation
                                policy: For a full refund, cancel at least 24
                                hours in advance of the start date of the
                                experience. Discover and book Phang Nga Bay Sea
                                Cave Canoeing & James Bond Island w/ Buffet
                                Lunch by Big Boat
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="accordion__item px-20 py-15 border-1 rounded-12">
                          <div className="accordion__button d-flex items-center justify-between">
                            <div className="button text-16 text-dark-1">
                              Can I change the travel date?
                            </div>

                            <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                              <i className="icon-plus"></i>
                              <i className="icon-minus"></i>
                            </div>
                          </div>

                          <div className="accordion__content">
                            <div className="pt-20">
                              <p>
                                Phang Nga Bay Sea Cave Canoeing & James Bond
                                Island w/ Buffet Lunch by Big Boat cancellation
                                policy: For a full refund, cancel at least 24
                                hours in advance of the start date of the
                                experience. Discover and book Phang Nga Bay Sea
                                Cave Canoeing & James Bond Island w/ Buffet
                                Lunch by Big Boat
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="accordion__item px-20 py-15 border-1 rounded-12">
                          <div className="accordion__button d-flex items-center justify-between">
                            <div className="button text-16 text-dark-1">
                              When and where does the tour end?
                            </div>

                            <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                              <i className="icon-plus"></i>
                              <i className="icon-minus"></i>
                            </div>
                          </div>

                          <div className="accordion__content">
                            <div className="pt-20">
                              <p>
                                Phang Nga Bay Sea Cave Canoeing & James Bond
                                Island w/ Buffet Lunch by Big Boat cancellation
                                policy: For a full refund, cancel at least 24
                                hours in advance of the start date of the
                                experience. Discover and book Phang Nga Bay Sea
                                Cave Canoeing & James Bond Island w/ Buffet
                                Lunch by Big Boat
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="accordion__item px-20 py-15 border-1 rounded-12">
                          <div className="accordion__button d-flex items-center justify-between">
                            <div className="button text-16 text-dark-1">
                              Do you arrange airport transfers?
                            </div>

                            <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                              <i className="icon-plus"></i>
                              <i className="icon-minus"></i>
                            </div>
                          </div>

                          <div className="accordion__content">
                            <div className="pt-20">
                              <p>
                                Phang Nga Bay Sea Cave Canoeing & James Bond
                                Island w/ Buffet Lunch by Big Boat cancellation
                                policy: For a full refund, cancel at least 24
                                hours in advance of the start date of the
                                experience. Discover and book Phang Nga Bay Sea
                                Cave Canoeing & James Bond Island w/ Buffet
                                Lunch by Big Boat
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tabs__pane ${
                      tabsBtn == 6 && "is-tab-el-active"
                    }`}>
                    <h2 className="text-30">Customer Reviews</h2>

                    <div className="overallRating mt-30">
                      <div className="overallRating__list">
                        <div className="overallRating__item">
                          <div className="overallRating__content">
                            <div className="overallRating__icon">
                              <i className="icon-star-2 text-30 text-accent-1"></i>
                            </div>

                            <div className="overallRating__info">
                              <h5 className="text-16 fw-500">Overall Rating</h5>
                              <div className="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div className="overallRating__rating d-flex items-center">
                            <i className="icon-star text-yellow-2 text-16"></i>
                            <div className="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div className="overallRating__item">
                          <div className="overallRating__content">
                            <div className="overallRating__icon">
                              <i className="icon-pin-2 text-30 text-accent-1"></i>
                            </div>

                            <div className="overallRating__info">
                              <h5 className="text-16 fw-500">Location</h5>
                              <div className="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div className="overallRating__rating d-flex items-center">
                            <i className="icon-star text-yellow-2 text-16"></i>
                            <div className="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div className="overallRating__item">
                          <div className="overallRating__content">
                            <div className="overallRating__icon">
                              <i className="icon-application text-30 text-accent-1"></i>
                            </div>

                            <div className="overallRating__info">
                              <h5 className="text-16 fw-500">Amenities</h5>
                              <div className="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div className="overallRating__rating d-flex items-center">
                            <i className="icon-star text-yellow-2 text-16"></i>
                            <div className="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div className="overallRating__item">
                          <div className="overallRating__content">
                            <div className="overallRating__icon">
                              <i className="icon-utensils text-30 text-accent-1"></i>
                            </div>

                            <div className="overallRating__info">
                              <h5 className="text-16 fw-500">Food</h5>
                              <div className="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div className="overallRating__rating d-flex items-center">
                            <i className="icon-star text-yellow-2 text-16"></i>
                            <div className="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div className="overallRating__item">
                          <div className="overallRating__content">
                            <div className="overallRating__icon">
                              <i className="icon-price-tag text-30 text-accent-1"></i>
                            </div>

                            <div className="overallRating__info">
                              <h5 className="text-16 fw-500">Price</h5>
                              <div className="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div className="overallRating__rating d-flex items-center">
                            <i className="icon-star text-yellow-2 text-16"></i>
                            <div className="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div className="overallRating__item">
                          <div className="overallRating__content">
                            <div className="overallRating__icon">
                              <i className="icon-bed-2 text-30 text-accent-1"></i>
                            </div>

                            <div className="overallRating__info">
                              <h5 className="text-16 fw-500">Rooms</h5>
                              <div className="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div className="overallRating__rating d-flex items-center">
                            <i className="icon-star text-yellow-2 text-16"></i>
                            <div className="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div className="overallRating__item">
                          <div className="overallRating__content">
                            <div className="overallRating__icon">
                              <i className="icon-online-support-2 text-30 text-accent-1"></i>
                            </div>

                            <div className="overallRating__info">
                              <h5 className="text-16 fw-500">Tour Operator</h5>
                              <div className="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div className="overallRating__rating d-flex items-center">
                            <i className="icon-star text-yellow-2 text-16"></i>
                            <div className="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-30">
                      <div className="row justify-between">
                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <div className="size-40 rounded-full">
                              <img
                                src="/img/reviews/avatars/1.png"
                                alt="image"
                                className="img-cover"
                              />
                            </div>

                            <div className="text-16 fw-500 ml-20">
                              Ali Tufan
                            </div>
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="text-14 text-light-2">April 2023</div>
                        </div>
                      </div>

                      <div className="d-flex items-center mt-15">
                        <div className="d-flex x-gap-5">
                          <i className="icon-star text-yellow-2 text-10"></i>

                          <i className="icon-star text-yellow-2 text-10"></i>

                          <i className="icon-star text-yellow-2 text-10"></i>

                          <i className="icon-star text-yellow-2 text-10"></i>

                          <i className="icon-star text-yellow-2 text-10"></i>
                        </div>
                        <div className="text-16 fw-500 ml-10">
                          Take this tour! Its fantastic!
                        </div>
                      </div>

                      <p className="mt-10">
                        Great for 4-5 hours to explore. Really a lot to see and
                        tons of photo spots. Even have a passport for you to
                        collect all the stamps as a souvenir. Must see for a
                        Harry Potter fan.
                      </p>

                      <div className="row x-gap-20 y-gap-20 pt-20">
                        <div className="col-auto">
                          <div className="size-130">
                            <img
                              src="/img/reviews/1/1.png"
                              alt="image"
                              className="img-cover rounded-12"
                            />
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="size-130">
                            <img
                              src="/img/reviews/1/2.png"
                              alt="image"
                              className="img-cover rounded-12"
                            />
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="size-130">
                            <img
                              src="/img/reviews/1/3.png"
                              alt="image"
                              className="img-cover rounded-12"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="d-flex x-gap-30 items-center mt-20">
                        <div>
                          <a href="#" className="d-flex items-center">
                            <i className="icon-like text-16 mr-10"></i>
                            Helpful
                          </a>
                        </div>
                        <div>
                          <a href="#" className="d-flex items-center">
                            <i className="icon-dislike text-16 mr-10"></i>
                            Not helpful
                          </a>
                        </div>
                      </div>
                    </div>

                    <button className="button -md -outline-accent-1 text-accent-1 mt-30">
                      See more reviews
                      <i className="icon-arrow-top-right text-16 ml-10"></i>
                    </button>

                    <h2 className="text-30 pt-60">Leave a Reply</h2>
                    <p className="mt-30">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>

                    <div className="reviewsGrid pt-30">
                      <div className="reviewsGrid__item">
                        Location
                        <div className="d-flex x-gap-5 pl-20">
                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>

                      <div className="reviewsGrid__item">
                        Amenities
                        <div className="d-flex x-gap-5 pl-20">
                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>

                      <div className="reviewsGrid__item">
                        Food
                        <div className="d-flex x-gap-5 pl-20">
                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>

                      <div className="reviewsGrid__item">
                        Room
                        <div className="d-flex x-gap-5 pl-20">
                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>

                      <div className="reviewsGrid__item">
                        Price
                        <div className="d-flex x-gap-5 pl-20">
                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>

                      <div className="reviewsGrid__item">
                        Tour Operator
                        <div className="d-flex x-gap-5 pl-20">
                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>

                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>
                    </div>

                    <div className="contactForm y-gap-30 pt-30">
                      <div className="row y-gap-30">
                        <div className="col-md-6">
                          <div className="form-input ">
                            <input type="text" required />
                            <label className="lh-1 text-16 text-light-1">
                              Name
                            </label>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-input ">
                            <input type="email" required />
                            <label className="lh-1 text-16 text-light-1">
                              Email
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <div className="form-input ">
                            <input type="text" required />
                            <label className="lh-1 text-16 text-light-1">
                              Title
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <div className="form-input ">
                            <textarea required rows="5"></textarea>
                            <label className="lh-1 text-16 text-light-1">
                              Comment
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <button className="button -md -dark-1 bg-accent-1 text-white">
                            Post Comment
                            <i className="icon-arrow-top-right text-16 ml-10"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tabs__pane ${
                      tabsBtn == 7 && "is-tab-el-active"
                    }`}>
                    <div className="d-lg-none">
                      <SingleTourForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 d-none d-lg-block">
              <SingleTourForm />
            </div>
          </div>
        </div>
      </section>
      <TourList />
    </div>
  );
};

export default TourDetail;
