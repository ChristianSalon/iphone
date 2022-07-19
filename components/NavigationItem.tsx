import { motion } from "framer-motion";
import React from "react";
import { useAppState } from "../hooks";
import styles from "../styles/NavigationItem.module.css";

interface Props {
  bgColor: string;
  notifications?: number;
  bgImage?: string;
}

const NavigationItem: React.FC<Props> = ({
  bgColor,
  notifications,
  bgImage,
}) => {
  return (
    <motion.div
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
    </motion.div>
  );
};

export default NavigationItem;
