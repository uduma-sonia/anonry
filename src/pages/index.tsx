import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Center, Spinner } from "@chakra-ui/react";

const [DashboardView, DashboardLayout] = [
  dynamic(() => import("@containers/Dashboard/DashboardView"), {
    loading: () => (
      <Center h="100vh" w="100vw">
        <Spinner
          thickness="5px"
          speed="0.8s"
          emptyColor="gray.200"
          color="#000000"
          size="xl"
        />
      </Center>
    ),
  }),
  dynamic(() => import("@components/DashboardLayout/DashboardLayout"), {
    loading: () => (
      <Center h="100vh" w="100vw">
        <Spinner
          thickness="5px"
          speed="0.8s"
          emptyColor="gray.200"
          color="#000000"
          size="xl"
        />
      </Center>
    ),
  }),
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anonry</title>
        <meta name="description" content="Anonry" />
        <link rel="icon" href="" />
      </Head>
      <DashboardLayout>
        <DashboardView />
      </DashboardLayout>
    </div>
  );
};

export default Home;
