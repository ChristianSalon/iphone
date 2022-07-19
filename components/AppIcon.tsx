import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/AppIcon.module.css";
import Image from "next/image";
import { useAppState } from "../hooks";

interface Props {
  bgColor: string;
  appName: string;
  notifications?: number;
  bgImage?: string;
}

const AppIcon: React.FC<Props> = ({
  bgColor,
  appName,
  notifications,
  bgImage,
}) => {
  const { isLocked } = useAppState();

  const variants = {
    locked: { scale: 1, opacity: 1 },
    unlocked: {
      y: [50, 0],
      opacity: [0, 1],
      rotateX: [-90, -25, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={styles.wrapper}
      variants={variants}
      animate={isLocked ? "locked" : "unlocked"}
    >
      <div
        className={styles.icon}
        style={{
          background: bgImage
            ? `url("app-icons/${bgImage}.svg") no-repeat center`
            : bgColor,
          backgroundSize: "contain",
        }}
      >
        {notifications && (
          <div className={styles.notifications}>{notifications}</div>
        )}
      </div>
      <p className={styles.name}>{appName}</p>
    </motion.div>
  );
};

export default AppIcon;
