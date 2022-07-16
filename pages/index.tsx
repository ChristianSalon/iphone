import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { DateInfo, SignalBar } from "../components";
import styles from "../styles/Home.module.css";

interface Props {
  date: string;
  time: string;
}

const Home: NextPage<Props> = ({ date, time }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iphone</title>
        <link rel="icon" href="/apple.png" />
      </Head>

      <div className={styles.base}>
        <div className={styles.mute}></div>
        <div className={styles.volume}>
          <div className={styles.volumeSwitch}></div>
          <div className={styles.volumeSwitch}></div>
        </div>
        <div className={styles.power}></div>
        <div className={styles.notch}>
          <div className={styles.camera}>
            <div className={styles.lens}></div>
          </div>
          <div className={styles.sensors}>
            <div className={styles.sensor}></div>
            <div className={styles.sensor}></div>
            <div className={styles.sensor}></div>
          </div>
        </div>
        <div className={styles.bezel}>
          <div className={styles.mic}></div>
          <div className={styles.screen}>
            <div className={styles.statusBar}>
              <div className={styles.signal}>
                <SignalBar height={1} />
                <SignalBar height={2} />
                <SignalBar height={3} />
                <SignalBar height={4} />
              </div>
              <div className={styles.wifi}>
                <Image src="/wifi.svg" width={12} height={12} />
              </div>
              <div className={styles.battery}>
                <div className={styles.batteryOutline}>
                  <div className={styles.batteryCapacity}></div>
                </div>
                <div className={styles.batteryTip}></div>
              </div>
              <div className={styles.statusSwipe}></div>
            </div>
            <DateInfo date={date} time={time} />
            <div className={styles.shortcuts}>
              <div className={styles.shortcut}>
                <Image src="/flash.svg" width={28} height={18} />
              </div>
              <div className={styles.shortcut}>
                <div className={styles.cameraBody}>
                  <div className={styles.cameraFlash}></div>
                  <div className={styles.lensOuter}>
                    <div className={styles.lensInner}></div>
                  </div>
                  <div className={styles.cameraMic}></div>
                </div>
              </div>
            </div>
            <div className={styles.swipeBar}></div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>Made by Christian Saloň.</footer>
    </div>
  );
};

export const getServerSideProps = () => {
  const now = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString("en-US", options);
  const time = `${now.getHours()}:${
    now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
  }`;
  return {
    props: {
      date,
      time,
    },
  };
};

export default Home;
