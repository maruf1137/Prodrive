import React from "react";

const SummaryBar = ({ summaryBarOpen }) => {
  return (
    <section
      className={
        summaryBarOpen
          ? "summary-bar-area summary-bar-area-open open"
          : "summary-bar-area"
      }>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="summary-bar">
              <li>
                <div className="info">Pick Up Address</div>
                <p>Airport Istanbul-Atatürk (IST) ...</p>
              </li>
              <li>
                <div className="info">Drop Off Address</div>
                <p>Airport Ankara-Esenboğa (ESB)... </p>
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
