import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const Main = () => {
  return (
    <div className="inter">
      <div className="h-16  relative z-50 w-full">
        <Navbar />
      </div>

      <div className="lg:container mx-auto px-1  lg:px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
