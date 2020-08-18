import React from "react";
import FooterProjects from "../../FooterProjects";
import { Layout } from "antd";
import MenuTop from "../menuTop/MenuTop";

function PopularMovies() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <div>PopularMovies</div>
      <FooterProjects />
    </Layout>
  );
}

export default PopularMovies;
