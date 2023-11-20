"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import BlogArticle from "./blogArticle";

const blogData = {
  btns: [
    "All",
    "Drivers",
    "Limousine",
    "Los Angeles",
    "Luxury Cars",
    "Transport",
  ],
  content: [
    {
      id: 1,
      img: "/images/blog/03.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Drivers", "Luxury Cars", "Transport"],
    },
    {
      id: 2,
      img: "/images/blog/04.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Limousine", "Luxury Cars"],
    },
    {
      id: 3,
      img: "/images/blog/05.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Drivers", "Limousine", "Luxury Cars"],
    },
    {
      id: 4,
      img: "/images/blog/03.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Drivers", "Los Angeles", "Transport"],
    },
    {
      id: 5,
      img: "/images/blog/04.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Los Angeles", "Luxury Cars"],
    },
    {
      id: 6,
      img: "/images/blog/05.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Los Angeles", "Luxury Cars", "Transport"],
    },
    {
      id: 7,
      img: "/images/blog/03.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Drivers", "Luxury Cars", "Transport"],
    },
    {
      id: 8,
      img: "/images/blog/04.jpg",
      title: "What To Do if Your Rental Car Has Met With An Accident",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Phasellus faucibus est sed facilisis viverra. Praesent nec accumsan nibh, eu grav...",
      author: "Ali Tufan",
      date: "January 18, 2017",
      url: "/blog/blog1",
      categories: ["All", "Drivers", "Limousine", "Los Angeles", "Transport"],
    },
  ],
};

const BlogArea = () => {
  const [filtered, setFiltered] = useState(blogData.content);
  const [blogTab, setBlogTab] = useState("All");

  useEffect(() => {
    const filterdContent = blogData.content.filter((item) =>
      item.categories.includes(blogTab)
    );
    setFiltered(filterdContent);
  }, [blogTab]);

  return (
    <section id="main-post" class="ver-1">
      <div class="container">
        <div class="row">
          <div class="block-post">
            <ul class="tab-post">
              {blogData.btns.map((title, i) => {
                return (
                  <li
                    class={blogTab == title ? "active" : ""}
                    data-filter="*"
                    key={i}
                    onClick={() => setBlogTab(title)}>
                    {title}
                  </li>
                );
              })}
            </ul>
            <motion.div layout class="post-grid grid">
              <AnimatePresence>
                {/* {filtered.map((movie) => {
                  return <Movie movie={movie} key={movie.id} />;
                })} */}
                {filtered.map((item) => {
                  return <BlogArticle item={item} key={item.id} />;
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="pagination-area ver-1">
              <ul>
                <li class="prev">
                  <a href="#" class="waves-effect" title="">
                    <img src="images/icon/prev.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" class="waves-effect" title="">
                    1
                  </a>
                </li>
                <li class="active">
                  <a href="#" class="waves-effect" title="">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" class="waves-effect" title="">
                    3
                  </a>
                </li>
                <li>
                  <a href="#" class="waves-effect" title="">
                    ...
                  </a>
                </li>
                <li>
                  <a href="#" class="waves-effect" title="">
                    22
                  </a>
                </li>
                <li class="next">
                  <a href="#" class="waves-effect" title="">
                    <img src="images/icon/next.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
