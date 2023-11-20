"use client";
import React from "react";
import TempleteTitle from "../templeteTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const blogData = [
  {
    id: 1,
    title: "What To Do if Your Rental Car Has Met With An Accident",
    img: "/images/blog/03.jpg",
    author: "Ali Tufan",
    date: "January 18, 2017",
  },
  {
    id: 2,
    title: "What To Do if Your Rental Car Has Met With An Accident",
    img: "/images/blog/04.jpg",
    author: "Ali Tufan",
    date: "January 18, 2017",
  },
  {
    id: 3,
    title: "What To Do if Your Rental Car Has Met With An Accident",
    img: "/images/blog/05.jpg",
    author: "Ali Tufan",
    date: "January 18, 2017",
  },
  {
    id: 4,
    title: "What To Do if Your Rental Car Has Met With An Accident",
    img: "/images/blog/03.jpg",
    author: "Ali Tufan",
    date: "January 18, 2017",
  },
];
const Blog = () => {
  return (
    <section class="blog-slider change_bg hide_mb primary-slider">
      <div class="container">
        <TempleteTitle
          title="Articles & Tips"
          secTitle="Articles & Tips"
          subtitle="Explore some of the best tips from around the world"
        />
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper">
          {blogData.map(({ id, title, img, author, date }) => {
            return (
              <SwiperSlide key={id}>
                <article class="post">
                  <div class="featured-image">
                    <img src={img} alt={title} />
                  </div>
                  <div class="entry-content">
                    <div class="entry-post-title">
                      <h4 class="post-title">
                        <a href="#">{title}</a>
                      </h4>
                    </div>
                    <ul>
                      <li class="author">
                        <a href="#">
                          <img src="/images/icon/author.png" alt="" />
                          {author}
                        </a>
                      </li>
                      <li class="date">
                        <a href="#">
                          <img src="/images/icon/date.png" alt="" />
                          {date}
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
