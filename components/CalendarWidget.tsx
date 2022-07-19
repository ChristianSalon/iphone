import { motion } from "framer-motion";
import React from "react";
import { useAppState } from "../hooks";
import styles from "../styles/CalendarWidget.module.css";

const CalendarWidget: React.FC = () => {
  const { isLocked } = useAppState();

  const wrapperVariants = {
    locked: { scale: 1, opacity: 1 },
    unlocked: {
      y: [50, 0],
      opacity: [0.4, 1],
      transition: { duration: 0.5 },
    },
  };

  const remindersVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1],
      transition: { duration: 0.2, staggerChildren: 0.3 },
    },
  };

  const reminderVariants = {
    hidden: { opacity: 1, y: -10 },
    visible: {
      opacity: [0, 1],
      y: [-10, 0],
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className={styles.wrapper}
      variants={wrapperVariants}
      animate={isLocked ? "locked" : "unlocked"}
    >
      <div className={styles.widget}>
        <div className={styles.date}>
          <h5 className={styles.weekday}>Monday</h5>
          <h6 className={styles.day}>02</h6>
        </div>
        <motion.div
          className={styles.reminders}
          variants={remindersVariants}
          animate={isLocked ? "hidden" : "visible"}
        >
          <motion.div
            className={styles.reminder}
            style={{ borderColor: "lightgreen" }}
            variants={reminderVariants}
          >
            <h6 className={styles.reminderTitle}>Team Meeting</h6>
            <p className={styles.reminderTime}>9:45 - 11:00</p>
          </motion.div>
          <motion.div
            className={styles.reminder}
            style={{ borderColor: "purple" }}
            variants={reminderVariants}
          >
            <h6 className={styles.reminderTitle}>Visit Dentist</h6>
            <p className={styles.reminderTime}>13:00 - 14:00</p>
          </motion.div>
        </motion.div>
      </div>
      <p className={styles.appName}>Calendar</p>
    </motion.div>
  );
};

export default CalendarWidget;
