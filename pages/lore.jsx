import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";

const LorePage = dynamic(() => import("./LorePage"), {
  ssr: false,
});

const Lore = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LorePage />
    </>
  );
};

export default Lore;
