import React from "react";
import { Link } from "react-router-dom";

import "../styles/footerProjects.scss";

function FooterProjects() {
  return (
    <div className="footer-projects">
      <div className="footer-projects__content">
        <div className="footer-projects__proyectos">
          <Link className="fp__hipervinculo" to="/">
            Twitter
          </Link>
        </div>
        <div className="footer-projects__proyectos">
          <Link className="fp__hipervinculo" to="/cine-simulator">
            Cine
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterProjects;
