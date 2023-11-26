import React from "react";

const Taxis = ({ taxisActive }) => {
  return (
    <div class={taxisActive ? "wehicles active" : "wehicles visibility-hidden"}>
      <div class="fleet-carousel" data-columns="6">
        <div class="owl-carousel">
          <div class="fleet-item">
            <div class="images">
              <img src="/images/fleet/car-01.png" alt="" />
            </div>
            <div class="fleet-content">
              <h4 class="fleet-title">
                <a href="#">Business Class</a>
              </h4>
              <h4 class="automatic">4 Matic</h4>
            </div>
          </div>
          <div class="fleet-item">
            <div class="images">
              <img src="/images/fleet/car-02.png" alt="" />
            </div>
            <div class="fleet-content">
              <h4 class="fleet-title">
                <a href="#">Mercedes Benz AMG S63 L</a>
              </h4>
              <h4 class="automatic">4 Matic</h4>
            </div>
          </div>
          <div class="fleet-item">
            <div class="images">
              <img src="/images/fleet/car-03.png" alt="" />
            </div>
            <div class="fleet-content">
              <h4 class="fleet-title">
                <a href="#">Mercedes Benz V250</a>
              </h4>
              <h4 class="automatic">4 Matic</h4>
            </div>
          </div>
          <div class="fleet-item">
            <div class="images">
              <img src="/images/fleet/car-01.png" alt="" />
            </div>
            <div class="fleet-content">
              <h4 class="fleet-title">
                <a href="#">Mercedes Benz S350 L BlueTec</a>
              </h4>
              <h4 class="automatic">4 Matic</h4>
            </div>
          </div>
          <div class="fleet-item">
            <div class="images">
              <img src="/images/fleet/car-02.png" alt="" />
            </div>
            <div class="fleet-content">
              <h4 class="fleet-title">
                <a href="#">Mercedes Benz AMG S63 L</a>
              </h4>
              <h4 class="automatic">4 Matic</h4>
            </div>
          </div>
          <div class="fleet-item">
            <div class="images">
              <img src="/images/fleet/car-03.png" alt="" />
            </div>
            <div class="fleet-content">
              <h4 class="fleet-title">
                <a href="#">Mercedes Benz V250</a>
              </h4>
              <h4 class="automatic">4 Matic</h4>
            </div>
          </div>
          <div class="fleet-item">
            <div class="images">
              <img src="/images/fleet/car-01.png" alt="" />
            </div>
            <div class="fleet-content">
              <h4 class="fleet-title">
                <a href="#">Mercedes Benz S350 L BlueTec</a>
              </h4>
              <h4 class="automatic">4 Matic</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taxis;
