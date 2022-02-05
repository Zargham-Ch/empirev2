import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";

const ChatRoomPage = dynamic(() => import("./ChatRoomPage"), {
  ssr: false,
});

const ChatRoom = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ChatRoomPage />
    </>
  );
};

export default ChatRoom;
