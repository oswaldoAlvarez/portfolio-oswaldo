import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faAngrycreative } from "@fortawesome/free-brands-svg-icons";

import "../../../styles/cine-simulator/menuTop/menuTop.scss";

function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <FontAwesomeIcon icon={faAngrycreative} />
      </div>
      {/* <div className="menu-top__logo-responsive">
        <FontAwesomeIcon icon={faBars} />
      </div> */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/cine-simulator/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/cine-simulator/new-movies">Ultimos Lanzamientos</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/cine-simulator/popular-movies">Populares</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/cine-simulator/search-movies">Buscador</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuTop;
