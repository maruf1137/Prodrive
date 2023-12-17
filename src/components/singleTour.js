"use client";
import Calender from "@/components/Calender";
import TourList from "@/components/TourList";
import React, { useEffect, useState, useRef } from "react";
import SingleTourForm from "./singleTourForm";
import SingleTour from "@/app/jamaica/tours-list/[id]/page";

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

  // useEffect(() => {
  //   // Call the init function from the Accordion object
  //   Accordion.init();
  //   Tabs.init();
  //   // sectionSlider();
  //   // calendarSlider();
  //   calendarInteraction();
  // }, []);

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
      {/* <SingleTour /> */}

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
