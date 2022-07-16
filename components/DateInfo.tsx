import React from "react";
import styles from "../styles/DateInfo.module.css";

interface Props {
  date: string;
  time: string;
}

const DateInfo: React.FC<Props> = ({ date, time }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>{date}</div>
      <div className={styles.time}>{time}</div>
    </div>
  );
};

export default DateInfo;
