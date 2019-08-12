import React from "react";

import App, { Container } from "next/app";
import Router from "next/router";
import withFBQ from "next-fbq";
import { DefaultSeo } from "next-seo";

import Loader from "../components/Loader";

import { PageTransition } from "next-page-transitions";

import "./_custom.scss";

class HiVibe extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

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
}

export default withFBQ("670279876784486", Router)(HiVibe);
