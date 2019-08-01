import React from "react";

import Navigation from "../Navigation";
import Footer from "../Footer";

import Divider from "./Divider";
import SectionHeader from "./SectionHeader";

import "./index.scss";

function Layout({ id, children }) {
  return (
    <div id={id} className="page">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
export { Divider, SectionHeader };
