"use client";
import React, { useState } from "react";
import SummaryBar from "@/components/booking/summaryBar";
import StepsBar from "@/components/booking/stepsBar";
import LoginArea from "@/components/booking/loginArea";

const Login = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);
  return (
    <div>
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
