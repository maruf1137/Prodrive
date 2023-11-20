import Services from "@/components/home/services";
import dynamic from "next/dynamic";
import Fleet from "@/components/home/fleet";
import InfoBox from "@/components/home/infoBox";
import Choose from "@/components/home/choose";
import Blog from "@/components/home/blog";
import AboutBox from "@/components/home/aboutBox";
// const Fleet = dynamic(() => import("@/components/home/fleet"));
// const Fleet = dynamic(() => import("@/components/home/fleet"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div>
      <Services />
      <Fleet />
      <InfoBox />
      <AboutBox />
      <Choose />
      <Blog />
    </div>
  );
}
