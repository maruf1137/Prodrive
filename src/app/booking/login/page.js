"use client";
import React, { useState } from "react";
import SummaryBar from "@/components/booking/summaryBar";
import StepsBar from "@/components/booking/stepsBar";
import LoginArea from "@/components/booking/loginArea";
import MapArea from "@/components/booking/mapArea";

const Login = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);
  return (
    <div>
      <MapArea />
      <SummaryBar summaryBarOpen={summaryBarOpen} />
      <StepsBar
        stepNo={3}
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      />
      <LoginArea />
    </div>
  );
};

export default Login;
