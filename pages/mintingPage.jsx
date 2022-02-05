import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../Components/Footer";
import GamingZone from "../Components/GamingZone";
import Header from "../Components/Header";
import HeaderResponsive from "../Components/HeaderResponsive";
import { gradientScroll } from "../styles/utilsStyle";

const MintingPage = () => {
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
      <GamingZone />
      <Footer />
    </div>
  );
};

export default MintingPage;
