import React from "react";
import { CardColumns } from "react-bootstrap";

import Layout, { Divider } from "../../components/Layout";
import Product from "../../components/Product";

import { getAllProducts } from "../../queries/products";
import sanity from "../../lib/sanity";

import "./index.scss";

function Products({ products }) {
  return (
    <Layout id="products">
      <h2>Essentials</h2>
      <Divider />
      <CardColumns>
        {products.map(product => (
          <Product
            {...product}
            onClick={e =>
              logEvent(`/products`, `product ${product.name} comission click`)
            }
          />
        ))}
      </CardColumns>
    </Layout>
  );
}

Products.getInitialProps = async function() {
  return {
    products: await sanity.fetch(getAllProducts),
  };
};

export default Products;
