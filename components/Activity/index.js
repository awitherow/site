import React from "react";
import { Button } from "react-bootstrap";

import "./index.scss";

function Activity({ data }) {
  const { _id, name, description, image, benefit, products, tags } = data;

  return (
    <li className="hobby" key={_id}>
      <img src={image.url} />
      <div className="info">
        <h3>{name}</h3>
        <ul className="tags">
          {tags.map(({ _id, tag }) => (
            <li className="tag" key={_id}>
              {tag}
            </li>
          ))}
        </ul>
        <p>{description}</p>
        <h4>More About {name}</h4>
        <ul>
          {tags.map(({ _id, tag }, i) => (
            <li key={_id}>{tag}</li>
          ))}
        </ul>
        <div className="btn-container left">
          <Button>View Starter Kit ({products.length})</Button>
        </div>
      </div>
    </li>
  );
}

export default Activity;
