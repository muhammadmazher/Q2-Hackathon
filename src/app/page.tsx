import Image from "next/image";
import Navbar from "./Component/Navbar";
import MobileNavbar from "./Component/MobilleNavbar";
import HeroSection from "./Component/HeroSection";
import MainPage from "./Component/MainPage";
import NewArrivals from "./Component/NewArrivals";
import OurBlogs from "./Component/OurBlogs";
import FollowUs from "./Component/FollowUs";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <div>
      

      <div className="lg:hidden">
      <MobileNavbar />
      </div>

      <HeroSection />

      <MainPage />

      <NewArrivals />

      <OurBlogs />
      <FollowUs />


    </div>
  );
}
