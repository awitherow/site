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

function Product({ product, seo, asPath }) {
  const { image, title, description, creator, featured } = product;

  return (
    <Layout seo={seo} id="product-showcase">
      <section className={`${featured && "featured"}`}>
        <img className="main-image" src={urlFor(image).url()} />
        <div className="info">
          <h2>
            {title} by {creator}
          </h2>
          <p>{description}</p>
        </div>
      </section>
    </Layout>
  );
}

Product.getInitialProps = async function({ query, asPath }) {
  const { slug = "" } = query;
  const product = await sanity.fetch(getProductBySlug, { slug });

  const { title, description, image } = product;

  return {
    product,
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

export default withRouter(Product);
