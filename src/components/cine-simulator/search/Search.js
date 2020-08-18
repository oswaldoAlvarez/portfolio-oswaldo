import React from "react";
import FooterProjects from "../../FooterProjects";
import { Layout } from "antd";
import MenuTop from "../menuTop/MenuTop";

function Search() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <div>searchMovies</div>
      <FooterProjects />
    </Layout>
  );
}

export default Search;
