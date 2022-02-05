import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";

const FaqsPage = dynamic(() => import("./FaqsPage"), {
  ssr: false,
});

const Faqs = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <FaqsPage />
    </>
  );
};

export default Faqs;
