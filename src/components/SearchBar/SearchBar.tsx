import { useState } from "react";
import { Input, Switch, Row, Col } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import styles from "./SearchBar.module.less";

export interface SearchProps {
  placeholder?: string;
}

// type engine = "google" | "baidu";
enum Engine {
  google = "google",
  baidu = "baidu",
}

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const SearchBar = ({ placeholder }: SearchProps) => {
  const [searchEngine, setSearchEngine] = useState<Engine>(Engine.baidu);
  const onEngineChange = (checked: boolean) =>
    setSearchEngine(checked ? Engine.google : Engine.baidu);
  const onSearch = () => {};
  return (
    <>
      <h1 className={styles.title}>{searchEngine}</h1>
      <Row justify="center" align="middle">
        <Col span={1}>
          <Switch
            checkedChildren={Engine.google}
            unCheckedChildren={Engine.baidu}
            defaultChecked={false}
            onChange={onEngineChange}
          />
        </Col>
        <Col span={7}>
          <Search
            placeholder={placeholder}
            enterButton="Search"
            size="middle"
            suffix={suffix}
            onSearch={onSearch}
          />
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
