import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("@containers/Auth/LoginForm"));

const Signup: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anonry | Login</title>
        <meta name="Anonry" content="Anonry" />
        <link rel="icon" href="" />
      </Head>

      <>
        <LoginForm />
      </>
    </div>
  );
};

export default Signup;
