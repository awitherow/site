import React, { useState, Fragment } from "react";
import { withRouter } from "next/router";
import { Card, Form, Button } from "react-bootstrap";

import { logEvent } from "../../lib/analytics";

import sanity, { urlFor } from "../../lib/sanity";
import { getProductBySlug } from "../../queries/products";

import Layout, { Divider } from "../../components/Layout";
import MailchimpForm from "../../components/MailchimpForm";
import ShareIcons from "../../components/ShareIcons";
import Feature from "../../components/Feature";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import Block from "../../components/Block";

function Product({ product, seo, asPath }) {
  const {
    image,
    title,
    description,
    creator,
    featured,
    link,
    provider,
    tags,
    body,
  } = product;

  const { name } = provider;

  return (
    <Layout seo={seo} id="product-showcase">
      <section className={`${featured && "featured"}`}>
        <Feature />
        <img className="main-image" src={urlFor(image).url()} />
        <div className="info">
          <h2>
            {title} by {creator}
          </h2>
          <p>{body ? <Block content={body} /> : description}</p>
          <div className="btn-container">
            <a
              target="_blank"
              href={link}
              onClick={(e) =>
                logEvent(
                  `/product/${title}`,
                  `product ${title} comission click`
                )
              }
              className={`btn btn-${name.toLowerCase()}`}
            >
              Shop at {name}
            </a>
            <a
              target="_blank"
              href="https://calendly.com/awitherow/evolve"
              onClick={(e) =>
                logEvent(`/product/${title}`, `product ${title} 1:1 consult`)
              }
              className="btn btn-primary"
            >
              Let's Chat
            </a>
          </div>
        </div>
      </section>
      <section>
        <ShareIcons
          path={asPath}
          title={title}
          description={description}
          caption={description}
          media={urlFor(image).url()}
          image={urlFor(image).url()}
          subject={`Check out this article, ${title}, from highvib.es`}
          body="I found this pretty useful and wanted to share it with you!"
          openWindow={true}
          tags={tags}
          quote={description}
        />
      </section>
    </Layout>
  );
}

Product.getInitialProps = async function ({ query, asPath }) {
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
            url: urlFor(image).height(800).width(800).url(),
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
