import React, { Fragment } from "react";
import { setGlobal } from "reactn";

import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import withFBQ from "next-fbq";
import { DefaultSeo } from "next-seo";
import { PageTransition } from "next-page-transitions";

import Loader from "../components/Loader";

import "./_custom.scss";
import "./nprogress.scss";

setGlobal({
  modal: null,
});

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function HighVibes({ Component, pageProps, router }) {
  return (
    <Fragment>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://highvib.es",
          site_name: "highvib.es",
        }}
        twitter={{
          handle: "@highvib.es",
          site: "@highvib.es",
          cardType: "summary_large_image",
        }}
      />
      <PageTransition
        timeout={300}
        classNames="page-transition"
        loadingComponent={<Loader />}
        loadingDelay={0}
        loadingTimeout={{
          enter: 300,
          exit: 0,
        }}
        loadingClassNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </Fragment>
  );
}

HighVibes.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default withFBQ("670279876784486", Router)(HighVibes);
