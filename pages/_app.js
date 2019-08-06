import React from "react";
import App, { Container } from "next/app";
import { useRouter } from "next/router";

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
        <PageTransition
          timeout={100}
          classNames="page-transition"
          loadingComponent={<Loader />}
          loadingDelay={100}
          loadingTimeout={{
            enter: 100,
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
