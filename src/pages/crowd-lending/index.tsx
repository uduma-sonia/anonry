import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import MarketplaceView from "container/Marketplace/MarketplaceView";

const CrowdLending: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sync! | Crowd-lending</title>
        <meta name="Sync" content="Sync landing page" />
        <link rel="icon" href="/sync_favicon.png" />
      </Head>

      <Layout>
        <MarketplaceView />
      </Layout>
    </>
  );
};

export default CrowdLending;
