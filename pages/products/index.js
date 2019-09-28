import React from "react";
import { CardColumns } from "react-bootstrap";

import Layout, { Divider } from "../../components/Layout";
import ProductList from "../../components/ProductList";

import { getAllProducts } from "../../queries/products";
import sanity from "../../lib/sanity";

import "./index.scss";

function Products({ products, seo }) {
  return (
    <Layout id="products">
      <h2>Essentials</h2>
      <Divider />
      <ProductList
        products={products}
        onClick={e =>
          logEvent(`/products`, `product ${product.title} comission click`)
        }
      />
    </Layout>
  );
}

Products.getInitialProps = async function({ asPath }) {
  const title = "Essential Products for High Vibrational Living";
  const description =
    "On our journey towards a High Vibrational Lifestyle, we find that some things work and others don't. Here, we've compiled only the best solutions for Living your Dream Life, across all spectrums.";

  return {
    products: await sanity.fetch(getAllProducts),
    seo: {
      title,
      description,
      openGraph: {
        url: `https://highvib.es${asPath}`,
        title,
        description,
      },
    },
  };
};

export default Products;
