import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../Components/Footer";
import LoreZone from "../Components/LoreZone";
import Header from "../Components/Header";
import HeaderResponsive from "../Components/HeaderResponsive";
import { gradientScroll } from "../styles/utilsStyle";
const sideImg = "./assets/A4.png";

const LorePage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  useEffect(() => {
    gradientScroll();
  }, []);
  return (
    <div className="pageWrapperBg">
      <div id="bar"></div>
      <div id="path"></div>
      {isDesktopOrLaptop ? <Header /> : <HeaderResponsive />}
      <LoreZone />
      <Footer />
      <img src={sideImg} className="image" />
    </div>
  );
};

export default LorePage;
