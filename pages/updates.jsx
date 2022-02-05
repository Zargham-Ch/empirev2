import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";

const UpdatesPage = dynamic(() => import("./UpdatesPage"), {
  ssr: false,
});

const Updates = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <UpdatesPage />
    </>
  );
};

export default Updates;
