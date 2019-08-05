import React from "react";
import { Divider } from "../../Layout";

import "./index.scss";

const SectionHeader = ({ title, subtitle }) => (
  <div className="section-header">
    <h3>{title}</h3>
    <Divider />
    <p>{subtitle}</p>
  </div>
);

export default SectionHeader;
