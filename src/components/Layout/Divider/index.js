import React from "react";
import "./index.scss";

export default function Divider({ width = "", type = "" }) {
  return <div className={`divider ${width} ${type}`} />;
}
