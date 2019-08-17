import React from "react";
import { setGlobal } from "reactn";

import App, { Container } from "next/app";
import Router from "next/router";
import withFBQ from "next-fbq";
import { DefaultSeo } from "next-seo";

import Loader from "../components/Loader";

import { PageTransition } from "next-page-transitions";

import "./_custom.scss";

setGlobal({
  modal: null,
});

function HighVibes({ Component, pageProps, router }) {
  return (
    <Container>
      <DefaultSeo
        titleTemplate="highvib.es | %s"
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
    </Container>
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
