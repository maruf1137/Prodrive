import React from "react";

const TempleteTitle = ({
  title = "Our Services",
  secTitle = "Our Services",
  subtitle = "Our aim is to fill a gap in niche market of Trade",
}) => {
  return (
    <section class="template-title has-over">
      <div class="container">
        <h3 class="title">{title}</h3>
        <span class="title_over">{secTitle}</span>
        <p class="subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default TempleteTitle;
