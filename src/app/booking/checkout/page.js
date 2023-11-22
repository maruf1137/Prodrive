import React from "react";

const Checkout = () => {
  return (
    <section className="check-out-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="check-out">
              <div className="top">
                <div className="thanks">
                  <span>
                    <img src="/images/icon/thanks.png" alt="" />
                  </span>
                  THANK YOU
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  <br />
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="middle">
                <h2>RESERVARTION BASIC INFORMATION</h2>
                <ul className="summary-bar">
                  <li>
                    <div className="info">Pick Up Address</div>
                    <p>Airport Istanbul-Atatürk (IST) ...</p>
                  </li>
                  <li>
                    <div className="info">Drop Off Address</div>
                    <p>Airport Ankara-Esenboğa (ESB)...</p>
                  </li>
                  <li>
                    <div className="info">Pick Up Date</div>
                    <p>Sep 15, 2017</p>
                  </li>
                  <li>
                    <div className="info">Pick Up Time</div>
                    <p>9:45PM (21:45)</p>
                  </li>
                  <li>
                    <div className="info">Duration</div>
                    <p>About 5 hours – Distance: 476.2 km</p>
                  </li>
                </ul>
              </div>
              <div className="bottom">
                <h2>SELECTED CAR</h2>
                <p>Economy Premium</p>
                <div className="car-choose">
                  <img src="/images/booking/car-01.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
