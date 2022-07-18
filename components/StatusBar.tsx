import React from "react";
import Image from "next/image";
import styles from "../styles/StatusBar.module.css";

const StatusBar: React.FC = () => {
  return (
    <div className={styles.statusBar}>
      <Image src="/signal.svg" alt="Signal" width={11} height={11} />
      <Image src="/wifi.svg" alt="Wifi" width={12} height={12} />
      <Image src="/battery.svg" alt="Battery" width={14} height={14} />
      <div className={styles.statusSwipe}></div>
    </div>
  );
};

export default StatusBar;
