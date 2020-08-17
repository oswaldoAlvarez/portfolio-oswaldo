import React from "react";
import FooterProjects from "../FooterProjects";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function CineSimulator() {
  return (
    <div>
      <h1>hola</h1>
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      <FooterProjects />
    </div>
  );
}

export default CineSimulator;
