import { useState } from "react";
import { Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import styles from "./Setting.module.less";

export interface SettingProps {
  options: {
    name: string;
  }[];
}
const Setting = ({ options }: SettingProps) => {
  const [setting, setSettingStatus] = useState<boolean>(false);
  const handleClick = () => {
    console.log(options[0].name);
    setSettingStatus(!setting);
  };
  return (
    <div className={styles.setting}>
      <Button type="text" size="large" onClick={handleClick}>
        <SettingOutlined />
      </Button>
    </div>
  );
};
export default Setting;
