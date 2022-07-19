import { motion } from "framer-motion";
import React from "react";
import { NavigationItem } from ".";
import { useAppState } from "../hooks";
import styles from "../styles/Navigation.module.css";

const Navigation: React.FC = () => {
  const { isLocked } = useAppState();

  const variants = {
    locked: { opacity: 1 },
    unlocked: {
      opacity: [0.2, 1],
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };
  return (
    <motion.div
      className={styles.navigation}
      variants={variants}
      animate={isLocked ? "locked" : "unlocked"}
    >
      <NavigationItem bgColor={"#34da4f"} bgImage={"phone"} />
      <NavigationItem bgColor={"#006cff "} bgImage={"safari"} />
      <NavigationItem
        bgColor={"#34da4f"}
        notifications={24}
        bgImage={"messages"}
      />
      <NavigationItem bgColor={"#fc3c44"} bgImage={"music"} />
    </motion.div>
  );
};

export default Navigation;
