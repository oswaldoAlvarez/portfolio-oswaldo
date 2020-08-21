import React from "react";
import Header from "../headerCine/HeaderCine";
import { Layout } from "antd";
import MenuTop from "../menuTop/MenuTop";
import { Link } from "react-router-dom";

import "../../../styles/cine-simulator/error404/error404.scss";
import "../../../styles/cine-simulator/headerCine/headerCine.scss";

export default function Error404() {
  return (
    <Layout>
      <Header />
      <div className="error404">
        <h1>error404</h1>
        <h2>Página no encontrada</h2>
        <Link to="/cine-simulator/home">
          <h3>Volver al inicio.</h3>
        </Link>
      </div>
    </Layout>
  );
}
