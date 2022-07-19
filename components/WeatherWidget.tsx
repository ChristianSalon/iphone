import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useAppState } from "../hooks";
import styles from "../styles/WeatherWidget.module.css";

const WeatherWidget: React.FC = () => {
  const { isLocked } = useAppState();

  const variants = {
    locked: { scale: 1, opacity: 1 },
    unlocked: {
      y: [50, 0],
      opacity: [0.4, 1],
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={styles.wrapper}
      variants={variants}
      animate={isLocked ? "locked" : "unlocked"}
    >
      <div className={styles.widget}>
        <div className={styles.mainInfo}>
          <div className={styles.cityRow}>
            <h5 className={styles.city}>Prešov</h5>
            <Image src="/send.svg" alt="Send" width={7} height={7} />
          </div>
          <h6 className={styles.temperature}>31°</h6>
        </div>
        <div className={styles.details}>
          <Image src="/partly-cloudy.png" alt="PC" width={10} height={10} />
          <p className={styles.detailsText}>Partly Cloudy</p>
          <p className={styles.detailsText}>H:32° L:24°</p>
        </div>
      </div>
      <p className={styles.appName}>Weather</p>
    </motion.div>
  );
};

export default WeatherWidget;
