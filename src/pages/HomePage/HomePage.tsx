import { useState, useRef } from "react";

import SearchBar from "@/components/SearchBar/SearchBar";
import Setting from "@/components/Setting/Setting";
import Dock from "@/components/Dock/Dock";

import styles from "./styles.module.less";

const HomePage = () => {
  const maskRef = useRef<HTMLDivElement | null>(null);
  const controlMask = (show: boolean) => {
    const e: HTMLDivElement = maskRef.current as HTMLDivElement;
    e.style.display = show ? "block" : "none";
  };
  const onFocus = () => {
    controlMask(true);
  };
  const onBlur = () => {
    controlMask(false);
  };
  return (
    <div className={styles.home}>
      <SearchBar placeholder="搜索" onFocus={onFocus} onBlur={onBlur} />
      <Setting />
      <Dock />
      <div className={styles.mask} ref={maskRef}></div>
    </div>
  );
};

export default HomePage;
