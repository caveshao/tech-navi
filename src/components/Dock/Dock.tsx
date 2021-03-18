import React from "react";
import styles from "./Dock.module.less";

export interface DockProps {
  apps?: { icon: React.ReactNode }[];
}

const Dock = ({ apps }: DockProps) => {
  return (
    <h1 className={styles.dock}>
      {apps?.map((item, index) => (
        <div>{item.icon}</div>
      ))}
    </h1>
  );
};

export default Dock;
