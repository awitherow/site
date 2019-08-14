import React from "react";
import { CardColumns, Card } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Layout, { Divider } from "../../components/Layout";
import Tags from "../../components/Tags";

import { getAllProducts } from "../../queries/products";
import sanity from "../../lib/sanity";

import "./index.scss";

function Products({ products }) {
  return (
    <Layout id="products">
      <h2>Essential High Vibrational Products</h2>
      <Divider />
      <CardColumns>
        {products.map(
          ({ _id, image, description, link, name, creator, tags }) => (
            <Card key={_id}>
              <Card.Img variant="top" src={image.url} />
              <Card.Body>
                <Card.Title>
                  {name} by {creator}
                </Card.Title>
                {<Tags tags={tags} />}
                <Card.Text>{`${description.substring(0, 180)}...`}</Card.Text>
                <a
                  href={link}
                  onClick={e =>
                    logEvent(
                      `/activity/${activity.name}`,
                      `product ${name} comission click`,
                    )
                  }
                  className="btn btn-primary">
                  <FontAwesomeIcon icon={faShoppingCart} /> Select Item
                </a>
              </Card.Body>
            </Card>
          ),
        )}
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
