import React from "react";
import App, { Container } from "next/app";
import { useRouter } from "next/router";

import { PageTransition } from "next-page-transitions";

import "./_custom.scss";

const HiVibe = ({ Component, pageProps }) => (
  <Container>
    <PageTransition timeout={500} classNames="page-transition">
      <Component {...pageProps} key={useRouter().route} />
    </PageTransition>
    <style jsx global>{`
      .page-transition-enter {
        opacity: 0;
      }
      .page-transition-enter-active {
        opacity: 1;
        transition: opacity 300ms;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity 300ms;
      }
    `}</style>
  </Container>
);

HiVibe.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default HiVibe;
