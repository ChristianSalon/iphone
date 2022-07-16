import React from "react";
import styles from "../styles/SignalBar.module.css";

interface Props {
  height: number;
}

const SignalBar: React.FC<Props> = ({ height }) => {
  return (
    <div style={{ height: height * 1.8 }} className={styles.signalBar}></div>
  );
};

export default SignalBar;
