import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Center, Spinner } from "@chakra-ui/react";

const ForgotPasswordForm = dynamic(
  () => import("@containers/Auth/ForgotPasswordForm"),
  {
    loading: () => (
      <Center>
        <Spinner
          thickness="5px"
          speed="0.8s"
          emptyColor="gray.200"
          color="#000000"
          size="xl"
        />
      </Center>
    ),
  }
);

const ForgotPassword: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anonry | Forgot password</title>
        <meta name="description" content="retrieve your anonry account" />
        <link rel="icon" href="" />
      </Head>

      <>
        <ForgotPasswordForm />
      </>
    </div>
  );
};

export default ForgotPassword;
