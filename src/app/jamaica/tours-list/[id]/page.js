import React from "react";
// import TourDetail from "@/components/singleTour";
import dynamic from "next/dynamic";
const TourDetail = dynamic(() => import("@/components/singleTour"), {
  ssr: false,
});

const SingleTour = () => {
  return <TourDetail />;
};

export default SingleTour;
