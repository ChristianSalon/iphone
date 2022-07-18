import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/Phone.module.css";
import { LockScreen, HomeScreen } from ".";
import { useAppState } from "../hooks";

const Phone: React.FC = () => {
  const { isLocked } = useAppState();

  return (
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
        {isLocked ? <LockScreen /> : <HomeScreen />}
      </div>
    </div>
  );
};

export default Phone;
