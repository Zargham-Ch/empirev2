import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../Components/Footer";
import ChatRoomArea from "../Components/ChatRoomArea";
import Header from "../Components/Header";
import HeaderResponsive from "../Components/HeaderResponsive";
import { gradientScroll } from "../styles/utilsStyle";

const ChatRoomPage = () => {
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
      <ChatRoomArea />
      <Footer />
    </div>
  );
};

export default ChatRoomPage;
