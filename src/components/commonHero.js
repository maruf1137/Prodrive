import Link from "next/link";
import React from "react";

const CommonHero = ({
  title = "FLEET",
  subtitle = "Choose Your Dream Car From Among Six Different Categories",
  pageName = "Fleet",
}) => {
  return (
    <section class="top-title">
      <div class="top-page">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="top-page-heading">
                <h1>{title}</h1>
                <p class="sub-title">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="breadcrumbs">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <ul>
                <li>
                  <Link href="/">Home </Link>
                </li>
                <li>/ {pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonHero;
