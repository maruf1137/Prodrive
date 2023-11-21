"use client";
import React, { useState } from "react";
import StepsBar from "@/components/booking/stepsBar";
import SummaryBar from "@/components/booking/summaryBar";
import OptionsArea from "@/components/booking/optionsArea";

const page = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);
  return (
    <div>
      <SummaryBar summaryBarOpen={summaryBarOpen} />
      <StepsBar
        stepNo={2}
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
      <OptionsArea />
    </div>
  );
};

export default page;
