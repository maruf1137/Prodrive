"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PassengerInfoArea = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // router.push("/booking/card");
  };

  return (
    <section className="login-booking-area">
      <figure className="mx-auto mb-20 text-center logo">
        <img src="/img/general/small-logo.png" alt="" />
      </figure>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="login-booking">
              <ul className="login-tab-list">
                <li className="active">Passenger</li>
              </ul>
              <div className="login-content">
                <div>
                  <div className="register-form">
                    <form
                      action="#"
                      method="get"
                      accept-charset="utf-8"
                      onSubmit={(e) => handleSubmit(e)}>
                      <div className="one-half first-name">
                        <label for="firstname">First Name </label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          placeholder="Dave"
                        />
                      </div>
                      <div className="one-half last-name">
                        <label for="lastname">Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="Everton"
                        />
                      </div>
                      <div className="email one-half">
                        <label for="email">Email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="hello@jamrocktaxi.com"
                        />
                      </div>
                      <div className="one-half number-bags">
                        <label for="country">Country</label>
                        <select name="country" id="country">
                          <option value="England">England</option>
                          <option value="United States">United States</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Bangladesh">Bangladesh</option>
                        </select>
                        {/* <div className="select"></div> */}
                      </div>
                      <div className="one-half phone">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder="(+90) 538 658 96 315"
                        />
                      </div>
                      <div className="option-area-btns">
                        <div className="one-half">
                          <button className="back">Back</button>
                        </div>
                        <div className="one-half">
                          <button type="submit" className="submit">
                            CONTINUE
                          </button>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
};

export default PassengerInfoArea;
