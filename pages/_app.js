import React from "react";
import App, { Container } from "next/app";
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
          titleTemplate="hivib.es | %s"
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://hivib.es",
            site_name: "hivib.es",
          }}
          twitter={{
            handle: "@hivib.es",
            site: "@hivib.es",
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

export default HiVibe;
