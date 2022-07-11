import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const ForgotPasswordForm = dynamic(
  () => import("@containers/Auth/ForgotPasswordForm")
);

const ForgotPassword: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anonry | Forgot password</title>
        <meta name="Anonry" content="Anonry" />
        <link rel="icon" href="" />
      </Head>

      <>
        <ForgotPasswordForm />
      </>
    </div>
  );
};

export default ForgotPassword;
