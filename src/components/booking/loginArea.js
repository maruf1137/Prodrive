"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const tabBtns = [
  {
    id: 1,
    title: "LOGIN",
  },
  {
    id: 2,
    title: "REGISTER",
  },
];

const LoginArea = () => {
  const [tabBtnActive, setTabBtnActive] = useState(1);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/booking/card");
  };

  return (
    <section className="login-booking-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="login-booking">
              <ul className="login-tab-list">
                {tabBtns.map(({ id, title }) => {
                  return (
                    <li
                      className={tabBtnActive == id ? "active" : ""}
                      key={id}
                      onClick={() => setTabBtnActive(id)}>
                      {title}
                    </li>
                  );
                })}
              </ul>
              <div className="login-content">
                {tabBtnActive == 1 ? (
                  <div id="tab-1" className="content-tab">
                    <div className="login-form">
                      <form
                        action="#"
                        method="post"
                        accept-charset="utf-8"
                        onSubmit={(e) => handleSubmit(e)}>
                        <div className="one-half">
                          <div className="form-email">
                            <label for="">Email</label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              placeholder="creativelayer088@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="one-half">
                          <div className="form-password">
                            <label for="">Password</label>
                            <input
                              type="password"
                              name="email"
                              id="email"
                              placeholder="************"
                            />
                          </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="one-half">
                          <div className="remember">
                            <input
                              type="checkbox"
                              name="remember"
                              id="remember"
                            />
                            <label for="remember">Remember me</label>
                          </div>
                        </div>
                        <div className="one-half">
                          <div className="btn-submit">
                            <a href="#" title="">
                              Lost Your Password ?
                            </a>
                            <button type="submit">LOGIN</button>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </form>
                    </div>
                    <div className="login-social">
                      <span>OR</span>
                      <p>You can log in quickly with your account.</p>
                      <ul className="social">
                        <li className="facebook">
                          <a href="#" title="">
                            <span className="fa fa-facebook"></span>Connect with
                            Facebook
                          </a>
                        </li>
                        <li className="twitter">
                          <a href="#" title="">
                            <span className="fa fa-twitter"></span>Connect with
                            Twitter
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div id="tab-2" className="content-tab">
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
                          <label for="email">Email</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="creativelayer088@gmail.com"
                          />
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
                        <div className="one-half pass">
                          <label for="pass">Password</label>
                          <input type="text" name="pass" id="pass" />
                        </div>
                        <div className="one-half re-pass">
                          <label for="re-pass">Repeat Password</label>
                          <input type="password" name="phone" id="re-pass" />
                        </div>
                        <div className="one-half checkbox">
                          <input type="checkbox" name="accept" id="accept" />
                          <label for="accept">
                            Accept
                            <a href="#" title="">
                              terms & conditions
                            </a>{" "}
                            and the
                            <a href="#" title="">
                              privacy policy
                            </a>{" "}
                            input
                          </label>
                        </div>
                        <div className="one-half btn-submit">
                          <button type="submit">REGISTER</button>
                        </div>
                        <div className="clearfix"></div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
};

export default LoginArea;
