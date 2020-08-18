import React from "react";
import FooterProjects from "../../FooterProjects";
import { Layout } from "antd";
import MenuTop from "../menuTop/MenuTop";

function NewMovies() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <div>NewMovies</div>
      <FooterProjects />
    </Layout>
  );
}

export default NewMovies;
