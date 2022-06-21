import type { NextPage } from "next";
import Head from "next/head";
import CrowdLending from "./crowd-lending";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sync!</title>
        <meta name="Sync" content="Sync landing page" />
        <link rel="icon" href="/sync_favicon.png" />
      </Head>

      <CrowdLending />
    </div>
  );
};

export default Home;
