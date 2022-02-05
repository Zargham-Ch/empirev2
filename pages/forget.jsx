import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";

const ForgetPage = dynamic(() => import("./ForgetPage"), {
  ssr: false,
});

const Forget = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ForgetPage />
    </>
  );
};

export default Forget;
