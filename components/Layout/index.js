import React from "react";
import Head from "next/head";

import Navigation from "../Navigation";
import Footer from "../Footer";

import Divider from "./Divider";
import SectionHeader from "./SectionHeader";

import "./index.scss";

const defaultSEO = [
  { key: "author", value: "hivib.es" },
  { key: "robots", value: "index, follow" },
  {
    key: "keywords",
    value:
      "healthy lifestyle choices, how to live a healthy lifestyle, healthy lifestyle products, good habits",
  },
];

function Layout({ id, children, seo }) {
  return (
    <div id={id} className="page">
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {defaultSEO.map(({ key, value }) => (
          <meta name={key} content={value} />
        ))}
      </Head>

      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
export { Divider, SectionHeader };
