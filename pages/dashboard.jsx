import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";

const DashboardPage = dynamic(() => import("./DashboardPage"), {
  ssr: false,
});

const DashBoard = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DashboardPage />
    </>
  );
};

export default DashBoard;
