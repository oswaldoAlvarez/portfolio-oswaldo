import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "../../../styles/tweet-simulator/header/header.scss";

function Header() {
  return (
    <div className="header-TS">
      <FontAwesomeIcon icon={faTwitter} className="tw-svg" />
      <div className="header-TS__title">Tweets Simulator</div>
    </div>
  );
}

export default Header;
