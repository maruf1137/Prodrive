"use client";
import React, { useState } from "react";
import StepsBar from "@/components/booking/stepsBar";
import SummaryBar from "@/components/booking/summaryBar";
import BookingCardArea from "@/components/booking/bookingCardArea";
import Choose from "@/components/home/choose";

const Bookingcard = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);
  return (
    <div>
      <SummaryBar summaryBarOpen={summaryBarOpen} />
      <StepsBar
        stepNo={4}
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
      <BookingCardArea />
      <Choose />
    </div>
  );
};

export default Bookingcard;
