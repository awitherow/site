import React, { useEffect } from "react";
import App, { Container } from "next/app";
import Router from "next/router";

import useGlobal from "../src/store";

import "./_custom.scss";

export default class HiVibe extends App {
  componentDidMount() {}

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
