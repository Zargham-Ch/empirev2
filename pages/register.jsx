import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";

const RegisterPage = dynamic(() => import("./registerPage"), {
  ssr: false,
});

const Register = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RegisterPage />
    </>
  );
};

export default Register;
