import React from "react";
import FooterProjects from "../../FooterProjects";
import { Layout } from "antd";
import MenuTop from "../menuTop/MenuTop";

function Error404() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <div>error404</div>
      <FooterProjects />
    </Layout>
  );
}

export default Error404;
