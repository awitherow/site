import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

import Product from "../../components/Product";

import "./index.scss";

function Activity({ data, expanded }) {
  const { _id, name, image } = data;

  if (!_id) {
    return null;
  }

  const expansion = ({ tags, benefits, description, products }) => {
    return (
      <div className="body">
        <div className="information">
          <h3>About {name} </h3>
          <div className="tags">
            {tags.map(({ tag }, i) => (
              <div key={i} className="tag">
                {tag}
              </div>
            ))}
          </div>
          <p>{description}</p>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <p>Coming soon...</p>
          {/* TODO: add RESOURCES (redo benefits) */}
        </div>
        <div className="products">
          <h3>Products</h3>
          {products.map(product => (
            <Product data={product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`hobby ${expanded && "expansion"}`}>
      <Link href="/activity/[name]" as={`/activity/${name.toLowerCase()}`}>
        <a>
          <h3>{name}</h3>
          <img src={image.url} />
        </a>
      </Link>
      {expanded && expansion(data)}
    </div>
  );
}

export default Activity;
