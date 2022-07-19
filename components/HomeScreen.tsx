import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "../styles/HomeScreen.module.css";
import {
  AppIcon,
  CalendarWidget,
  Navigation,
  NavigationItem,
  StatusBar,
  WeatherWidget,
} from ".";

const HomeScreen: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    setTime(
      `${now.getHours()}:${
        now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
      }`
    );
  }, []);

  return (
    <motion.div className={styles.homeScreen}>
      <div className={styles.statusBar}>
        <div>{time}</div>
        <StatusBar />
      </div>
      <div className={styles.grid}>
        <div className={styles.widget1}>
          <CalendarWidget />
        </div>
        <div className={styles.widget2}>
          <WeatherWidget />
        </div>
        <div className={styles.icon1}>
          <AppIcon bgColor={"lightgray"} appName={"Maps"} bgImage={"maps"} />
        </div>
        <div className={styles.icon2}>
          <AppIcon bgColor={"#E50914"} appName={"Netflix"} />
        </div>
        <div className={styles.icon3}>
          <AppIcon bgColor={"#FFD52E"} appName={"Notes"} bgImage={"notes"} />
        </div>
        <div className={styles.icon4}>
          <AppIcon
            bgColor={"#007AFF"}
            appName={"App Store"}
            bgImage={"app-store"}
          />
        </div>
        <div className={styles.icon5}>
          <AppIcon bgColor={"#7360f2"} appName={"Viber"} notifications={34} />
        </div>
        <div className={styles.icon6}>
          <AppIcon
            bgColor={"#25D366"}
            appName={"WhatsApp"}
            notifications={11}
          />
        </div>
        <div className={styles.icon7}>
          <AppIcon bgColor={"#1DA1F2"} appName={"Twitter"} />
        </div>
        <div className={styles.icon8}>
          <AppIcon bgColor={"black"} appName={"TikTok"} />
        </div>
        <div className={styles.icon9}>
          <AppIcon
            bgColor={
              "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
            }
            appName={"Instagram"}
            notifications={1}
          />
        </div>
        <div className={styles.icon10}>
          <AppIcon bgColor={"red"} appName={"YouTube"} />
        </div>
        <div className={styles.icon11}>
          <AppIcon
            bgColor={"#555555"}
            appName={"Settings"}
            bgImage={"settings"}
          />
        </div>
        <div className={styles.icon12}>
          <AppIcon
            bgColor={"#34da4f"}
            appName={"FaceTime"}
            bgImage={"facetime"}
          />
        </div>
        <div className={styles.icon13}>
          <AppIcon
            bgColor={"white"}
            appName={"Calendar"}
            notifications={3}
            bgImage={"calendar"}
          />
        </div>
        <div className={styles.icon14}>
          <AppIcon bgColor={"#111111"} appName={"Clock"} bgImage={"clock"} />
        </div>
        <div className={styles.icon15}>
          <AppIcon bgColor={"#e68600"} appName={"Books"} bgImage={"books"} />
        </div>
        <div className={styles.icon16}>
          <AppIcon
            bgColor={"#B150E2"}
            appName={"Podcasts"}
            bgImage={"podcasts"}
          />
        </div>
        <div className={styles.pages}>
          <div className={`${styles.page} ${styles.activePage}`}></div>
          <div className={styles.page}></div>
        </div>
        <Navigation />
      </div>
    </motion.div>
  );
};

export default HomeScreen;
