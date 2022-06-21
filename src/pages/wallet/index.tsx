import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import WalletView from "container/Wallet/WalletView";

const Wallet: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sync! | Wallet</title>
        <meta name="Sync" content="Sync landing page" />
        <link rel="icon" href="/sync_favicon.png" />
      </Head>

      <Layout>
        <WalletView />
      </Layout>
    </>
  );
};

export default Wallet;
