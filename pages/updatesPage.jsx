import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../Components/Footer";
import UpdatesComp from "../Components/UpdatesComp";
import Header from "../Components/Header";
import HeaderResponsive from "../Components/HeaderResponsive";
import { gradientScroll } from "../styles/utilsStyle";
const sideImg = "./assets/A4.png";

const updatesPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    gradientScroll();
  }, []);
  return (
    <div className="pageWrapperBg">
      <div id="bar"></div>
      <div id="path"></div>
      {isDesktopOrLaptop ? <Header /> : <HeaderResponsive />}
      <UpdatesComp />
      <Footer />
      <img src={sideImg} className="image" />
    </div>
  );
};

export default updatesPage;
