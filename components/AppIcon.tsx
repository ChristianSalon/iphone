import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/AppIcon.module.css";
import Image from "next/image";
import { useAppState } from "../hooks";

interface Props {
  bgColor: string;
  appName: string;
  notifications?: number;
}

const AppIcon: React.FC<Props> = ({ bgColor, appName, notifications }) => {
  const { isLocked } = useAppState();

  return (
    <motion.div
      className={styles.wrapper}
      animate={
        isLocked ? undefined : { y: [50, 0], z: [10, 0], opacity: [0.4, 1] }
      }
      transition={{ duration: 0.5 }}
    >
      <div className={styles.icon} style={{ background: bgColor }}>
        {notifications && (
          <div className={styles.notifications}>{notifications}</div>
        )}
      </div>
      <p className={styles.name}>{appName}</p>
    </motion.div>
  );
};

export default AppIcon;
