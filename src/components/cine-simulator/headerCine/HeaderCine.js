import React, { useState } from "react";
import MenuTop from "../menuTop/MenuTop";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../../../styles/cine-simulator/headerCine/headerCine.scss";

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  return (
    <div className="header-cine">
      <MenuTop />
      <div className="header-cine__content">
        <label
          onClick={() => setMenuState(true)}
          className="header-cine__logo-responsive"
        >
          <FontAwesomeIcon icon={faBars} />
        </label>
        <div className={!!menuState ? "landing-menu" : "landing-menu m-0"}>
          <div className="closeMenu" onClick={() => setMenuState(false)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="header-cine__content-link" key="1">
            <Link className="header-cine__link" to="/cine-simulator/home">
              Home
            </Link>
          </div>
          <div className="header-cine__content-link" key="2">
            <Link className="header-cine__link" to="/cine-simulator/new-movies">
              Ultimos Lanzamientos
            </Link>
          </div>
          <div className="header-cine__content-link" key="3">
            <Link
              className="header-cine__link"
              to="/cine-simulator/popular-movies"
            >
              Populares
            </Link>
          </div>
          <div className="header-cine__content-link" key="4">
            <Link
              className="header-cine__link"
              to="/cine-simulator/search-movies"
            >
              Buscador
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
