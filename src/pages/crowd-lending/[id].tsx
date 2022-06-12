import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import ProjectView from "container/Marketplace/ProjectView";

const CrowdLending: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sync! | Crowd-lending</title>
        <meta name="Sync" content="Sync landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ProjectView />
      </Layout>
    </>
  );
};

export default CrowdLending;
