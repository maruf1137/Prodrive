import React from "react";

const BookingCardArea = () => {
  return (
    <section class="card-area">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="form-card">
              <form action="#" method="get" accept-charset="utf-8">
                <div class="row">
                  <div class="one-half name">
                    <label for="name">Cardholder name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Ali TUF..."
                    />
                  </div>
                  <div class="one-half card-number">
                    <label for="card-number">Card number </label>
                    <input
                      type="text"
                      name="card-number"
                      id="card-number"
                      placeholder="043......"
                    />
                  </div>
                  <div class="one-half date">
                    <label for="month">Expiration date</label>
                    <div class="one-half">
                      <input
                        type="text"
                        name="month"
                        id="month"
                        placeholder="MM"
                      />
                    </div>
                    <div class="one-half">
                      <input type="text" name="year" placeholder="YY" />
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="one-half cvv">
                    <label for="cvv">cvv</label>
                    <input type="text" name="cvv" id="cvv" placeholder="567" />
                    <span>
                      <img src="images/icon/card.png" alt="" />
                    </span>
                  </div>
                  <div class="clearfix"></div>
                  <p>
                    <span>Please note:</span> you will be able to review your
                    ride on the next page before confirming your reservation.
                    Your card will not be charged until after your ride.
                  </p>
                  <div class="col-md-12">
                    <div class="btn-submit">
                      <button type="submit">CONTINUE</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </section>
  );
};

export default BookingCardArea;
