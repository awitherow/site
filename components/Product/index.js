import React from "react";
import { Card, Button } from "react-bootstrap";

import Tags from "../Tags";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Products({
  _id,
  image,
  name,
  creator,
  tags,
  description,
  onClick,
  link,
}) {
  return (
    <Card key={_id}>
      <Card.Img variant="top" src={image.url} />
      <Card.Body>
        <Card.Title>
          {name} by {creator}
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
            className="btn btn-amazon">
            <FontAwesomeIcon icon={faShoppingCart} /> Amazon It
          </a>
          <Button variant="secondary" onClick={() => {}}>
            Review
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}
