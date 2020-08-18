import React from "react";
import { Link } from "react-router-dom";

import "../styles/footerProjects.scss";

function FooterProjects() {
  return (
    <div className="footer-projects">
      <div className="footer-projects__content">
        <Link className="footer-projects__proyectos" to="/">
          Twitter
        </Link>
        <Link className="footer-projects__proyectos" to="/cine-simulator/home">
          Cine
        </Link>
      </div>
    </div>
  );
}

export default FooterProjects;
