import { useState } from "react";
import { connect } from "react-redux";
import { Input, Switch, Row, Col } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import { changePlaceholder } from "../../state/actions/home.action";

import styles from "./SearchBar.module.less";

export interface SearchProps {
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  changePlaceholder: (newPlaceholder: string) => object;
}

// type engine = "google" | "baidu";
enum Engine {
  google = "Google",
  baidu = "Baidu",
}

const engineUrl = {
  [Engine.google]: "https://www.google.com/search",
  [Engine.baidu]: "https://www.baidu.com/s",
};

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const SearchBar = ({
  placeholder,
  onFocus,
  onBlur,
  changePlaceholder,
}: SearchProps) => {
  const [searchEngine, setSearchEngine] = useState<Engine>(Engine.baidu);
  const onEngineChange = (checked: boolean) => {
    // setSearchEngine(checked ? Engine.google : Engine.baidu);
    console.log(checked)
    changePlaceholder(checked.toString());
  };
  const onSearch = (value: string) => {
    const link = engineUrl[searchEngine];
    window.location.href = `${link}?ie=UTF-8&q=${encodeURIComponent(
      value
    )}&wd=${encodeURIComponent(value)}`;
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

export default connect(
  (state: { home: { placeholder: string } }) => ({
    placeholder: state.home.placeholder,
  }),
  {
    changePlaceholder,
  }
)(SearchBar);
