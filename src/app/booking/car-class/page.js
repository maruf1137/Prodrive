"use client";
import React, { useState } from "react";
import SummaryBar from "@/components/booking/summaryBar";
import StepsBar from "@/components/booking/stepsBar";
import VehicleArea from "@/components/booking/vehicleArea";
import MapArea from "@/components/booking/mapArea";

const CarClass = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);

  return (
    <div className="car-class-page">
      <MapArea />
      <SummaryBar summaryBarOpen={summaryBarOpen} />
      <StepsBar
        stepNo={1}
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
      <VehicleArea />
    </div>
  );
};

export default CarClass;
