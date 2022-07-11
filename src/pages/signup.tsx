import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const SignupForm = dynamic(() => import("@containers/Auth/SignupForm"));

const Signup: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anonry | Signup</title>
        <meta name="Anonry" content="Anonry" />
        <link rel="icon" href="" />
      </Head>

      <>
        <SignupForm />
      </>
    </div>
  );
};

export default Signup;
