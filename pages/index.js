import Head from "next/head";
import Navbar from "../components/pages/Navbar";

import styles from "../styles/Home.module.scss";

import Fullpage from "../components/pages/Fullpage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hard Blue - Cryptocurrency</title>
        <meta
          name="description"
          content="Hard Blue runs on the Cardano blockchain, completely decentralized and with low commissions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video
        className={styles.player}
        src="/network.mp4"
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
      ></video>
      <Navbar />
      <Fullpage />
    </div>
  );
}
