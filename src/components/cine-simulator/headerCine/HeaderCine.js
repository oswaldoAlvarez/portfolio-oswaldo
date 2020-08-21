import React, { useState } from "react";
import MenuTop from "../menuTop/MenuTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../../../styles/cine-simulator/headerCine/headerCine.scss";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="header-cine">
        <MenuTop />
        <label className="header-cine__logo-responsive">
          <FontAwesomeIcon icon={faBars} />
        </label>
      </div>
    </>
  );
}
