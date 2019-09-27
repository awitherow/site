import React from "react";
import { Card, Button } from "react-bootstrap";

import Tags from "../Tags";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default function Products({
  _id,
  image,
  title,
  creator,
  tags,
  description,
  onClick,
  provider,
  link,
}) {
  const { name } = provider;
  return (
    <Card key={_id}>
      <Card.Img variant="top" src={image.url} />
      <Card.Body>
        <Card.Title>
          {title} by {creator}
        </Card.Title>
        {tags ? <Tags type="small" tags={tags} /> : null}
        <Card.Text style={{ fontSize: "0.88rem" }}>{`${description.substring(
          0,
          180,
        )}...`}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div
          className="btn-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alingItems: "center",
          }}>
          <a
            target="_blank"
            href={link}
            onClick={onClick}
            className={`btn btn-${name.toLowerCase()}`}>
            <FontAwesomeIcon icon={faShoppingCart} /> Get At ${name}
          </a>
        </div>
      </Card.Footer>
    </Card>
  );
}
