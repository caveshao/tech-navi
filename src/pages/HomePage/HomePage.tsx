import _ from "lodash"

import { useState, useRef } from "react";
import {EditOutlined, PictureOutlined ,PlusOutlined,UpCircleTwoTone } from "@ant-design/icons"

import SearchBar from "@/components/SearchBar/SearchBar";
import Setting from "@/components/Setting/Setting";
import Dock from "@/components/Dock/Dock";

import styles from "./styles.module.less";

const settingOptions = [
  {
    name: "share",
    icon:<EditOutlined />
  },
  {
    name: "background",
    icon: <PictureOutlined />
  },
  {
    name: "addApp",
    icon: <PlusOutlined />
  },
];

const apps = [{
    icon: <UpCircleTwoTone />
}]

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
      <Setting options={settingOptions} />
      <Dock apps={apps}/>
      <div className={styles.mask} ref={maskRef}></div>
    </div>
  );
};

export default HomePage;
