import React from "react";
import Link from "next/link";

import { Divider } from "../Layout";

import Tile from "./Tile";
import Jumbotron from "./Jumbotron";
import Resources from "./Resources";

import "./index.scss";

export default function Activity({ data, expanded }) {
  const {
    _id,
    title,
    name,
    image,
    tags,
    body,
    resources,
    products,
    description,
  } = data;

  if (!_id) {
    return null;
  }

  return (
    <div className={`activity ${expanded ? "expansion" : ""}`}>
      {!expanded ? (
        <Tile
          name={name}
          image={image}
          productCount={products}
          resourceCount={resources}
        />
      ) : (
        <Jumbotron
          description={description}
          image={image}
          title={title}
          tags={tags}
          body={body}
        />
      )}
      {expanded ? <Resources title={title} resources={resources} /> : null}
    </div>
  );
}
