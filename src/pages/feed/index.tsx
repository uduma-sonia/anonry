import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Center, Spinner } from "@chakra-ui/react";

const [FeedView, DashboardLayout] = [
  dynamic(() => import("@containers/Feed/FeedView")),
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
];

const Feed: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anonry | feed</title>
        <meta name="description" content="Anonry" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <DashboardLayout>
        <FeedView />
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

export default Feed;
