import React, { Fragment } from "react";
import { setGlobal } from "reactn";
import Head from "next/head";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import withFBQ from "next-fbq";
import { DefaultSeo } from "next-seo";
import { PageTransition } from "next-page-transitions";

import Loader from "../components/Loader";
import Pixel from "../components/Pixel";

import "./_custom.scss";
import "./nprogress.scss";

setGlobal({
  modal: null,
});

Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function HighVibes({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="fo-verify" content="4594dec5-0667-40cc-8974-49bff93c02e3" />
        <meta
          name="google-site-verification"
          content="sO6wuMmvZ9hsBHpkHZaNRqqA9xnwGV8_YRN6N2TU2nc"
        />
        <meta
          name="p:domain_verify"
          content="fb4c33a5ff75491d44ccfd6df46ab953"
        />

        <Pixel />
      </Head>
      <DefaultSeo
        openGraph={{
          titleTemplate: "highvib.es | %s",
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
        loadingClassNames="page-transition"
      >
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </>
  );
}

HighVibes.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default withFBQ("670279876784486", Router)(HighVibes);
