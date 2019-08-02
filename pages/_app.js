import React from "react";
import App, { Container } from "next/app";
import { useRouter } from "next/router";

import { PageTransition } from "next-page-transitions";

import "./_custom.scss";

class HiVibe extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
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
        <PageTransition timeout={500} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </Container>
    );
  }
}

export default HiVibe;
