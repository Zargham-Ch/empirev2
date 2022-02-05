import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../Components/Header";
import HeaderResponsive from "../Components/HeaderResponsive";
import PasswordComp from "../Components/PasswordComp";
import { gradientScroll } from "../styles/utilsStyle";

const PasswordPage = () => {
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
      {isDesktopOrLaptop ? (
        <Header classHeader="withOutNav" />
      ) : (
        <HeaderResponsive classHeaderRes="withOutNav" />
      )}
      <PasswordComp />
    </div>
  );
};

export default PasswordPage;
