import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "../../../styles/tweet-simulator/header/header.scss";

function Header() {
  return (
    <div className="header-TS">
      <FontAwesomeIcon icon={faTwitter} className="tw-svg" />
      <h1 className="header-TS__title">Tweets Simulator</h1>
    </div>
  );
}

export default Header;
