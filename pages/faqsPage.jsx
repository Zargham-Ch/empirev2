import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AccordionItem from "../Components/AccordionItem";
import HeaderResponsive from "../Components/HeaderResponsive";
import { useMediaQuery } from "react-responsive";
import { gradientScroll } from "../styles/utilsStyle";
const sideImg = "./assets/A4.png";

const FaqsPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  useEffect(() => {
    gradientScroll();
  }, []);
  return (
    <div className="faqsPageWrapper">
      <div id="bar"></div>
      <div id="path"></div>
      {isDesktopOrLaptop ? <Header /> : <HeaderResponsive />}
      <AccordionItem />
      <img src={sideImg} className="image" />
      <Footer />
    </div>
  );
};

export default FaqsPage;
