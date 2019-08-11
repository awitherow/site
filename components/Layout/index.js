import React, { useEffect } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

import { initGA, logPageView } from "../../lib/analytics";

import Navigation from "../Navigation";
import Footer from "../Footer";

import Divider from "./Divider";
import SectionHeader from "./SectionHeader";

import "./index.scss";

function Layout({ id, children, seo, ...props }) {
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

  const { fixedNav } = props;

  return (
    <div id={id} className="page">
      <Head>
        <meta
          name="google-site-verification"
          content="Jr-O8hDyohipkSzYI8ozk2c8raUfRyLEa24UqBq3q0U"
        />
      </Head>
      <NextSeo {...seo} />
      <Navigation fixedNav={fixedNav} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
export { Divider, SectionHeader };
