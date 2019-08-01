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
  </Container>
);

export default HiVibe;
