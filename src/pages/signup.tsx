import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Center, Spinner } from "@chakra-ui/react";

const SignupForm = dynamic(() => import("@containers/Auth/SignupForm"), {
  loading: () => (
    <Center w="100vw" h="100vh">
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
        <title>Anonry | Signup</title>
        <meta name="description" content="Sign up on anonry" />
        <link rel="icon" href="" />
      </Head>

      <>
        <SignupForm />
      </>
    </div>
  );
};

export default Signup;
