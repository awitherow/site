import React from "react";
import Head from "next/head";

import Navigation from "../Navigation";
import Footer from "../Footer";

import Divider from "./Divider";
import SectionHeader from "./SectionHeader";

import "./index.scss";

function Layout({ id, children, seo }) {
  return (
    <div id={id} className="page">
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow" />
      </Head>

      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
export { Divider, SectionHeader };
