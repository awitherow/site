import React, { useState, Fragment } from "react";
import { withRouter } from "next/router";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";

import sanity, { urlFor } from "../../lib/sanity";
import { getProductBySlug } from "../../queries/products";

import Layout, { Divider } from "../../components/Layout";
import MailchimpForm from "../../components/MailchimpForm";
import ShareIcons from "../../components/ShareIcons";
import "./index.scss";

function Post({ product, seo, asPath }) {
  console.log(product);

  return (
    <Layout seo={seo} id="blog-post" fixedNav={true}>
      Welcome to The Product Page!
    </Layout>
  );
}

Post.getInitialProps = async function({ query, asPath }) {
  const { slug = "" } = query;
  const product = await sanity.fetch(getProductBySlug, { slug });

  const { title, description, image } = post;

  return {
    post,
    seo: {
      title,
      description,
      openGraph: {
        url: `https://highvib.es${asPath}`,
        title,
        description,
        images: [
          {
            url: urlFor(image)
              .height(800)
              .width(800)
              .url(),
            width: 800,
            height: 800,
            alt: description,
          },
        ],
      },
    },
  };
};

export default withRouter(Post);
