import React from "react";
// import TourDetail from "@/components/singleTour";
import dynamic from "next/dynamic";
const TourDetail = dynamic(() => import("@/components/singleTour"), {
  ssr: false,
});
// import TourDetail from "@/components/singleTour";

const SingleTour = () => {
  return <TourDetail />;
};

export default SingleTour;
