import React from "react";
import Router from "next/router";

export default class extends React.Component {
    static async getInitialProps({ res }) {
        if (res) {
            res.writeHead(302, {
                Location:
                    "https://docs.google.com/document/d/1zrQD9oC_IefTchEJr8xuU_ZjqdC6V9CQSAKAqVFselM/edit?usp=sharing",
            });
            res.end();
        } else {
            Router.push("/");
        }
        return {};
    }
}
