import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const Main = () => {
  return (
    <div className="inter">
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
