import React from "react";
import { withRouter } from "next/router";
import sanity, { urlFor } from "../../lib/sanity";

import { getProductBySlug } from "../../queries/products";

import Layout from "../../components/Layout";

import "./index.scss";

function Product({ product, seo }) {
  return (
    <Layout seo={seo} id="product">
      Hello, world!
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
            url: urlFor(image),
          },
        ],
      },
    },
  };
};

export default withRouter(Product);
