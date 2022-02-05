import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";

const WhitePage = dynamic(() => import("./WhitePage"), {
  ssr: false,
});

const White = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <WhitePage />
    </>
  );
};

export default White;
