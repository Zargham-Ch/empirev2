import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderResponsive from "../Components/HeaderResponsive";
import LoginFormPage from "../Components/LoginFormPage";
import { gradientScroll } from "../styles/utilsStyle";

const LoginPage = () => {
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
        <HeaderResponsive classHeader="withOutNav" />
      )}
      <LoginFormPage />
    </div>
  );
};

export default LoginPage;
