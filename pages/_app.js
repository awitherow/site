import React, { useEffect } from "react";
import App, { Container } from "next/app";
import { useRouter } from "next/router";

import { PageTransition } from "next-page-transitions";

import "./_custom.scss";

export function HiVibe({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Container>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
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
}

HiVibe.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default HiVibe;
