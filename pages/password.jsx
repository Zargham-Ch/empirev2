import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";

const PasswordPage = dynamic(() => import("./PasswordPage"), {
  ssr: false,
});

const Password = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <PasswordPage />
    </>
  );
};

export default Password;
