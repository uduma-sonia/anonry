import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Center, Spinner } from "@chakra-ui/react";
import { timelineAPI } from "@utils/api";
import { ReqConfig } from "@utils/types";

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

const Feed: NextPage = ({ data }: any) => {
  return (
    <div>
      <Head>
        <title>Anonry | feed</title>
        <meta name="description" content="Anonry" />
        <link rel="icon" href="" />
      </Head>

      <DashboardLayout>
        <FeedView data={data?.data?.data} />
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

  const reqObject: ReqConfig = {
    headers: {
      Authorization: `Bearer ${session.token!}`,
    },
  };

  const results = await timelineAPI.getTimeline(reqObject);

  return {
    props: {
      session,
      data: results,
    },
  };
}

export default Feed;
