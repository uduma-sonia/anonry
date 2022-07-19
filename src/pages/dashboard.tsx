import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
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

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anonry - Dashboard</title>
        <meta name="description" content="Anonry" />
        <link rel="icon" href="" />
      </Head>

      <DashboardLayout>
        <DashboardView />
      </DashboardLayout>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Dashboard;
