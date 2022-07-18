import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/CalendarWidget.module.css";

const CalendarWidget: React.FC = () => {
  return (
    <motion.div className={styles.wrapper}>
      <div className={styles.widget}>
        <div className={styles.date}>
          <h5 className={styles.weekday}>Monday</h5>
          <h6 className={styles.day}>02</h6>
        </div>
        <div className={styles.reminders}>
          <div className={styles.reminder} style={{ borderColor: "lightblue" }}>
            <h6 className={styles.reminderTitle}>Team Meeting</h6>
            <p className={styles.reminderTime}>9:45-11:00</p>
          </div>
          <div className={styles.reminder} style={{ borderColor: "purple" }}>
            <h6 className={styles.reminderTitle}>Visit Dentist</h6>
            <p className={styles.reminderTime}>13:00-14:00</p>
          </div>
        </div>
      </div>
      <p className={styles.appName}>Calendar</p>
    </motion.div>
  );
};

export default CalendarWidget;
