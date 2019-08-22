import React from "react";
import Link from "next/link";

import { Divider } from "../Layout";

import Tile from "./Tile";
import Jumbotron from "./Jumbotron";
import Resources from "./Resources";

import "./index.scss";

export default function Activity({ data, expanded }) {
  const { _id, name, image, tags, description, resources, products } = data;

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
          image={image}
          name={name}
          tags={tags}
          description={description}
        />
      )}
      {expanded ? <Resources name={name} resources={resources} /> : null}
    </div>
  );
}
