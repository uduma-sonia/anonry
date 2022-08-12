import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Center, Spinner } from "@chakra-ui/react";

const LoginForm = dynamic(() => import("@containers/Auth/LoginForm"), {
  loading: () => (
    <Center h="100vh">
      <Spinner
        thickness="5px"
        speed="0.8s"
        emptyColor="gray.200"
        color="#000000"
        size="xl"
      />
    </Center>
  ),
});

const Signup: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anonry | Login</title>
        <meta name="description" content="log into your anonry account" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <>
        <LoginForm />
      </>
    </div>
  );
};

export default Signup;
