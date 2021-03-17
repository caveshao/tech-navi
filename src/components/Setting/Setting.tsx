import React, { useState } from "react";
import { Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import styles from "./Setting.module.less";

export interface SettingProps {
  options: {
    name: string;
    icon: React.ReactNode
  }[];
}
const Setting = ({ options }: SettingProps) => {
  const [setting, setSettingStatus] = useState<boolean>(false);
  const handleClick = () => {
    setSettingStatus(!setting);
  };
  return (
    <div className={styles.setting}>
      <div className={styles.options}>
        {options.map((item, index) => {
          if (index === 0) {
            return (
              <>
                <span key={item.name + index} className={styles.option}>{item.icon}</span>
                <Button type="text" size="large" className={styles.option} onClick={handleClick}>
                  <SettingOutlined />
                </Button>
              </>
            );
          }
          return <span key={item.name + index} className={styles.option}>{item.icon}</span>;
        })}
      </div>
    </div>
  );
};
export default Setting;
