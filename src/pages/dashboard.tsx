/* eslint-disable react-hooks/exhaustive-deps */
import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Center, Spinner, useDisclosure } from "@chakra-ui/react";
import { useUser } from "@utils/hooks/useUser";
import { useEffect } from "react";

const [DashboardView, DashboardLayout, SetUsername] = [
  dynamic(() => import("@containers/Dashboard/DashboardView"), {
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
  }),
  dynamic(() => import("@components/DashboardLayout/DashboardLayout"), {
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
  }),
  dynamic<any>(() =>
    import("@components/Modals").then((mod) => mod.SetUsername)
  ),
];

const Dashboard: NextPage = () => {
  const { data: user } = useUser();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    if (user) {
      const userName = user?.data?.data.user_name;

      if (!userName) {
        onOpen();
      }
    }
  }, [user]);

  return (
    <div>
      <Head>
        <title>Anonry - Dashboard</title>
        <meta name="description" content="Anonry" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <SetUsername isOpen={isOpen} onClose={onClose} />

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
