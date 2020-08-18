import React from "react";
import { Spin } from "antd";

import "../../../styles/cine-simulator/loading/loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <Spin size="large" />
      <h5 className="loading__title">Cargando . . .</h5>
    </div>
  );
}
