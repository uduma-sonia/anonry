import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Center, Spinner } from "@chakra-ui/react";

const VerifyEmailForm = dynamic(
  () => import("@containers/Auth/VerifyEmailForm"),
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

const VerifyEmail: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anonry | Verify email</title>
        <meta name="Anonry" content="Anonry" />
        <link rel="icon" href="" />
      </Head>

      <>
        <VerifyEmailForm />
      </>
    </div>
  );
};

export default VerifyEmail;
