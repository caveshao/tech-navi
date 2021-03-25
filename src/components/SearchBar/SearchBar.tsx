import { useState } from "react";
import { Input, Switch, Row, Col } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import styles from "./SearchBar.module.less";

export interface SearchProps {
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

// type engine = "google" | "baidu";
enum Engine {
  google = "Google",
  baidu = "Baidu",
 }

const engineUrl = {
  [Engine.google]:'https://www.google.com/search',
  [Engine.baidu]:'https://www.baidu.com/s'
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

const SearchBar = ({ placeholder, onFocus, onBlur }: SearchProps) => {
  const [searchEngine, setSearchEngine] = useState<Engine>(Engine.baidu);
  const onEngineChange = (checked: boolean) =>
    setSearchEngine(checked ? Engine.google : Engine.baidu);
  const onSearch = (value:string) => {
    const link =  engineUrl[searchEngine]
    window.location.href = `${link}?ie=UTF-8&q=${encodeURIComponent(value)}&wd=${encodeURIComponent(value)}`
  };
  return (
    <div className={styles.searchEngine}>
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
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
