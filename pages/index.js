import GlobalStyle from "../styles/GlobalStyle";
import Head from "next/head";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./HomePage"), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Home />
    </>
  );
};

export default Index;
