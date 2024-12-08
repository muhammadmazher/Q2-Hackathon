
import MobileNavbar from "./Component/MobilleNavbar";
import HeroSection from "./Component/HeroSection";
import MainPage from "./Component/MainPage";
import NewArrivals from "./Component/NewArrivals";
import OurBlogs from "./Component/OurBlogs";
import FollowUs from "./Component/FollowUs";


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
