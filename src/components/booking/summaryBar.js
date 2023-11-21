import React from "react";

const SummaryBar = ({ summaryBarOpen }) => {
  return (
    <section
      class={summaryBarOpen ? "summary-bar-area open" : "summary-bar-area"}>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="summary-bar">
              <li>
                <div class="info">Pick Up Address</div>
                <p>Airport Istanbul-Atatürk (IST) ...</p>
              </li>
              <li>
                <div class="info">Drop Off Address</div>
                <p>Airport Ankara-Esenboğa (ESB)... </p>
              </li>
              <li>
                <div class="info">Pick Up Date</div>
                <p>Sep 15, 2017</p>
              </li>
              <li>
                <div class="info">Pick Up Time</div>
                <p>9:45PM (21:45)</p>
              </li>
              <li>
                <div class="info">Duration</div>
                <p>About 5 hours – Distance: 476.2 km </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryBar;
