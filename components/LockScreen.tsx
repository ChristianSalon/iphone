import { motion, PanInfo } from "framer-motion";
import React, { useEffect, useState } from "react";
import { DateInfo, StatusBar } from ".";
import Image from "next/image";
import styles from "../styles/LockScreen.module.css";
import { useAppState } from "../hooks";

const LockScreen: React.FC = () => {
  const { isLocked, setIsLocked } = useAppState();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    setDate(
      now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    );
    setTime(
      `${now.getHours()}:${
        now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
      }`
    );
  }, []);

  const onDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y < -10) setIsLocked(false);
  };

  return (
    <div className={styles.lockScreen}>
      <StatusBar />
      <motion.div
        className={styles.animate}
        onPan={(e, pointInfo) => {
          console.log(pointInfo.offset.y);
        }}
        drag="y"
        dragConstraints={{
          top: -10,
          bottom: 1,
        }}
        dragElastic={0}
        whileDrag={{ filter: ["blur(0px)", "blur(1px)"] }}
        dragSnapToOrigin={true}
        onDragEnd={onDragEnd}
        onDragStart={(event, info) => console.log(info.point.x, info.point.y)}
        style={{ zIndex: isLocked ? 3 : 1 }}
      >
        <DateInfo date={date} time={time} />
        <div className={styles.shortcuts}>
          <div className={styles.shortcut}>
            <Image src="/flash.svg" alt="Flashlight" width={28} height={18} />
          </div>
          <div className={styles.shortcut}>
            <div className={styles.cameraBody}>
              <div className={styles.cameraFlash}></div>
              <div className={styles.lensOuter}>
                <div className={styles.lensInner}></div>
              </div>
              <div className={styles.cameraMic}></div>
            </div>
          </div>
        </div>
        <div className={styles.swipeBar}></div>
      </motion.div>
    </div>
  );
};

export default LockScreen;
