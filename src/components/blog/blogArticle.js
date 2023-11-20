import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogArticle = ({ item }) => {
  const { id, title, img, desc, author, date, url } = item;
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opactiy: 0 }}>
      <article class="post ipsotope transport limousine">
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
          <p>{desc}</p>
          <div class="btn-readmore">
            <Link href={url}>
              Read More <img src="images/icon/right-2.png" alt="" />
            </Link>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default BlogArticle;
