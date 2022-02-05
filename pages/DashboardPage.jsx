import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import DashBoardComp from "../Components/DashBoardComp";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderResponsive from "../Components/HeaderResponsive";
import { gradientScroll } from "../styles/utilsStyle";

const DashboardPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  useEffect(() => {
       gradientScroll();
  }, []);
  return (
    <div className="minting-wrapper">
      <div id="bar"></div>
      <div id="path"></div>
      {isDesktopOrLaptop ? <Header /> : <HeaderResponsive />}
      <DashBoardComp />
      <Footer />
    </div>
  );
};

export default DashboardPage;
