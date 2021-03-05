import React from "react";
import { Input, Switch, Space, Row, Col } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
export interface SearchProps {
  placeholder?: string
}

const SearchBar = ({placeholder}: SearchProps) => {
  const onSearch = () => {
    console.log("search");
  };
  return (
    <Row justify="center" align="middle">
      <Col span={1}>
        <Switch />
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
  );
};

export default SearchBar;
