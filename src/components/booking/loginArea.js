"use client";
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

  return (
    <section class="login-booking-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-8">
            <div class="login-booking">
              <ul class="login-tab-list">
                {tabBtns.map(({ id, title }) => {
                  return (
                    <li
                      class={tabBtnActive == id ? "active" : ""}
                      key={id}
                      onClick={() => setTabBtnActive(id)}>
                      {title}
                    </li>
                  );
                })}
              </ul>
              <div class="login-content">
                {tabBtnActive == 1 ? (
                  <div id="tab-1" class="content-tab">
                    <div class="login-form">
                      <form action="#" method="post" accept-charset="utf-8">
                        <div class="one-half">
                          <div class="form-email">
                            <label for="">Email</label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              placeholder="creativelayer088@gmail.com"
                            />
                          </div>
                        </div>
                        <div class="one-half">
                          <div class="form-password">
                            <label for="">Password</label>
                            <input
                              type="password"
                              name="email"
                              id="email"
                              placeholder="************"
                            />
                          </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="one-half">
                          <div class="remember">
                            <input
                              type="checkbox"
                              name="remember"
                              id="remember"
                            />
                            <label for="remember">Remember me</label>
                          </div>
                        </div>
                        <div class="one-half">
                          <div class="btn-submit">
                            <a href="#" title="">
                              Lost Your Password ?
                            </a>
                            <button type="submit">LOGIN</button>
                          </div>
                        </div>
                        <div class="clearfix"></div>
                      </form>
                    </div>
                    <div class="login-social">
                      <span>OR</span>
                      <p>You can log in quickly with your account.</p>
                      <ul class="social">
                        <li class="facebook">
                          <a href="#" title="">
                            <span class="fa fa-facebook"></span>Connect with
                            Facebook
                          </a>
                        </li>
                        <li class="twitter">
                          <a href="#" title="">
                            <span class="fa fa-twitter"></span>Connect with
                            Twitter
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div id="tab-2" class="content-tab">
                    <div class="register-form">
                      <form action="#" method="get" accept-charset="utf-8">
                        <div class="one-half first-name">
                          <label for="firstname">First Name </label>
                          <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="Ali"
                          />
                        </div>
                        <div class="one-half last-name">
                          <label for="lastname">Last Name</label>
                          <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="TUF..."
                          />
                        </div>
                        <div class="one-half email">
                          <label for="email">Email</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="creativelayer088@gmail.com"
                          />
                        </div>
                        <div class="one-half phone">
                          <label for="phone">Phone</label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="(+90) 538 658 96 315"
                          />
                        </div>
                        <div class="one-half pass">
                          <label for="pass">Password</label>
                          <input type="text" name="pass" id="pass" />
                        </div>
                        <div class="one-half re-pass">
                          <label for="re-pass">Repeat Password</label>
                          <input type="password" name="phone" id="re-pass" />
                        </div>
                        <div class="one-half checkbox">
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
                        <div class="one-half btn-submit">
                          <button type="submit">REGISTER</button>
                        </div>
                        <div class="clearfix"></div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
        </div>
      </div>
    </section>
  );
};

export default LoginArea;
