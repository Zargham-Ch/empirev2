import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";

const LoginPage = dynamic(() => import("./LoginPage"), {
  ssr: false,
});

const Login = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LoginPage />
    </>
  );
};

export default Login;
