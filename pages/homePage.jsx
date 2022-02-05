import { useEffect } from "react";
import Footer from "../Components/Footer";
import CryptomeriaAlliance from "../Components/CryptomeriaAlliance";
import FutureRoadMap from "../Components/FutureRoadMap";
import MintingGame from "../Components/MintingGame";
import Popular from "../Components/Popular";
import FirstFold from "../Components/FirstFold";
import HeaderResponsive from "../Components/HeaderResponsive";
import { useMediaQuery } from "react-responsive";
import Header from "../Components/Header";
import { gradientScroll } from "../styles/utilsStyle";
import VerticalTime from "../Components/VerticalTime";

const HomePage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  useEffect(() => {
    gradientScroll();
  }, []);

  return (
    <div className="home-wrapper">
      <div id="bar"></div>
      <div id="path"></div>
      {isDesktopOrLaptop ? <Header /> : <HeaderResponsive />}
      <FirstFold />
      <Popular />
      <MintingGame />
      <VerticalTime />
      <CryptomeriaAlliance />
      <Footer />
    </div>
  );
};

export default HomePage;
