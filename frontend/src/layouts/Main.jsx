import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <div className="inter min-h-screen">
      <div className="h-16  relative z-50 w-full">
        <Navbar />
      </div>

      <div className="lg:container mx-auto my-3 px-1  lg:px-12 ">
        <Outlet />
      </div>
      <div>
        <div className="bg-primary text-white ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
