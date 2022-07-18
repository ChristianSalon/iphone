import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { DateInfo, Phone, SignalBar } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iphone</title>
        <link rel="icon" href="/apple.png" />
      </Head>

      <Phone />
    </div>
  );
};

export default Home;
