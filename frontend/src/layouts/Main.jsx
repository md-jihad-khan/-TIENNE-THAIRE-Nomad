import { Outlet, useLocation } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useEffect } from "react";
import img from "../assets/Footer/et.png";

const Main = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="inter min-h-screen">
      <div className="h-16  relative z-50 w-full">
        <Navbar />
      </div>

      <div className="lg:container mx-auto my-3 px-3  lg:px-12 ">
        <Outlet />
      </div>
      <div className="">
        <img className="" src={img} alt="" />
        <div className="bg-primary text-white ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
