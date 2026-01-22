import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const ClientLayout = () => {
  return (
    <div className="client-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
