import { useState } from "react";
import { Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import styles from "./Setting.module.less";

const Setting = () => {
  const [setting, setSettingStatus] = useState<boolean>(false);
  const handleClick = () => {
      setSettingStatus(!setting)
  }
  return (
    <div className={styles.setting}>
      <Button type="text" size="large" onClick={handleClick}>
        <SettingOutlined />
       </Button>
    </div>
  );
};
export default Setting;
