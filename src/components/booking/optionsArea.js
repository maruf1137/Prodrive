"use client";
import React from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

const OptionsArea = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/booking/login");
  };
  return (
    <section className="options-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="form-options">
              <form
                action="#"
                method="post"
                accept-charset="utf-8"
                onSubmit={(e) => handleSubmit(e)}>
                <div className="one-half number-pass">
                  <label for="number-pass">Number Of Passengers</label>
                  <div className="select">
                    <select name="number-pass" id="number-pass">
                      <option value="">05</option>
                      <option value="">06</option>
                      <option value="">07</option>
                      <option value="">08</option>
                    </select>
                  </div>
                </div>
                <div className="one-half number-bags">
                  <label for="number-bags">Number Of Bags</label>
                  <div className="select">
                    <select name="number-pass" id="number-pass">
                      <option value="">05</option>
                      <option value="">06</option>
                      <option value="">07</option>
                      <option value="">08</option>
                    </select>
                  </div>
                </div>
                <div className="one-half first-name">
                  <label for="firstname">First Name </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Ali"
                  />
                </div>
                <div className="one-half last-name">
                  <label for="lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="TUF..."
                  />
                </div>
                <div className="one-half email">
                  <label for="email">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="creativelayer088@gmail.com"
                  />
                </div>
                <div className="one-half phone">
                  <label for="phone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+90 538 658 96 315"
                  />
                </div>
                <div className="infomation">
                  <label for="infomation">Additional Information</label>
                  <textarea
                    name="infomation"
                    id="infomation"
                    placeholder="Lorem Ipsum "></textarea>
                </div>
                <div className="btn-submit">
                  <button type="submit">CONTINUE</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
};

export default OptionsArea;
