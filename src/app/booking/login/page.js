"use client";
import React, { useState } from "react";
// import SummaryBar from "@/components/booking/summaryBar";
// import StepsBar from "@/components/booking/stepsBar";
// import MapArea from "@/components/booking/mapArea";
import LoginArea from "@/components/booking/loginArea";

const Login = () => {
  const [summaryBarOpen, setSummaryBarOpen] = useState(false);
  return (
    <div className="login-page mt-60">
      {/* <MapArea /> */}
      {/* <SummaryBar summaryBarOpen={summaryBarOpen} />
      <StepsBar
        stepNo={3}
        summaryBarOpen={summaryBarOpen}
        setSummaryBarOpen={setSummaryBarOpen}
      /> */}
      <LoginArea />
    </div>
  );
};

export default Login;
