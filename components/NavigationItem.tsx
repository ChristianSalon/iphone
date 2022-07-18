import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/NavigationItem.module.css";

interface Props {
  bgColor: string;
  notifications?: number;
}

const NavigationItem: React.FC<Props> = ({ bgColor, notifications }) => {
  return (
    <motion.div className={styles.icon} style={{ background: bgColor }}>
      {notifications && (
        <div className={styles.notifications}>{notifications}</div>
      )}
    </motion.div>
  );
};

export default NavigationItem;
