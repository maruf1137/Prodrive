import { Dosis } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// css
import "../styles/css/bootstrap.min.css";
import "../styles/css/shortcodes.css";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/css/style.css";
import "../styles/css/responsive.css";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <div class="layout-theme">
          {/* <div id="loading-overlay">
            <div class="loader"></div>
          </div> */}
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
