import React from "react";

export default function Custom404() {
  return (
    <div className="mt-header2">
      <section className="nopage">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-xl-6 col-lg-6">
              <img src="img/404/1.svg" alt="image" />
            </div>

            <div className="col-xl-5 col-lg-6">
              <div className="nopage__content pr-30 lg:pr-0">
                <h1>
                  40<span className="text-accent-1">4</span>
                </h1>
                <h2 className="text-30 md:text-24 fw-700">
                  Oops! It looks like youre lost.
                </h2>
                <p>
                  The page youre looking for isnt available. Try to search again
                  or use the go to.
                </p>

                <button className="button -md -dark-1 bg-accent-1 text-white mt-25">
                  Go back to homepage
                  <i className="icon-arrow-top-right ml-10"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
