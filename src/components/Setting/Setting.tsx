import { Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import styles from "./Setting.module.less"

const Setting = () => {
  return (
    <div className={styles.setting}>
      <Button type="text" size="large">
        <SettingOutlined />
      </Button>
    </div>
  );
};
export default Setting;
