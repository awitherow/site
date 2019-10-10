import React from "react";
import Router from "next/router";

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location:
          "https://www.amplemeal.com/pages/product-comparison#austin_witherow",
      });
      res.end();
    } else {
      Router.push("/about");
    }
    return {};
  }
}
