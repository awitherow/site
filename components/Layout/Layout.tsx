import React, { useEffect } from "react";
import { useGlobal } from "reactn";
import { NextSeo } from "next-seo";

import { initGA, logPageView } from "../../lib/analytics";

import Navigation from "../Navigation";
import Footer from "../Footer";
import GlobalModal from "../GlobalModal";

import "./index.scss";

function Layout({ id, children, seo, ...props }) {
  useEffect(() => {
    function analyze() {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }

      logPageView();
    }

    analyze();
  }, []);

  const { fixedNav = false } = props;
  const [modal] = useGlobal("modal");

  return (
    <div id={id} className="page">
      <NextSeo {...seo} />
      <Navigation fixedNav={fixedNav} />
      <GlobalModal modal={modal} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
