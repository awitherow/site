import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

import "./index.scss";

function Activity({ data }) {
  const { _id, name, description, image, benefit, products, tags } = data;

  if (!_id) {
    return null;
  }

  return (
    <li className="hobby" key={_id}>
      <Link href="/activity/[activity]" as={`/activity/${name.toLowerCase()}`}>
        <a>
          <h3>{name}</h3>
          <img src={image.url} />
        </a>
      </Link>
    </li>
  );
}

export default Activity;
