import React, { useEffect } from "react";
import Head from "next/head";

import { initGA, logPageView } from "../../lib/analytics";

import Navigation from "../Navigation";
import Footer from "../Footer";

import Divider from "./Divider";
import SectionHeader from "./SectionHeader";

import "./index.scss";

const defaultSEO = [
  { key: "author", value: "hivib.es" },
  { key: "robots", value: "index, follow" },
];

function Layout({ id, children, seo }) {
  useEffect(() => {
    async function analyze() {
      if (!window.GA_INITIALIZED) {
        await initGA();
        window.GA_INITIALIZED = true;
      }

      await logPageView();
    }

    analyze();
  }, []);

  return (
    <div id={id} className="page">
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {defaultSEO.map(({ key, value }) => (
          <meta key={key} name={key} content={value} />
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
