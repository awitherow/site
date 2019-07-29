import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

import "./index.scss";

function Activity({ data }) {
  const { _id, name, image } = data;

  if (!_id) {
    return null;
  }

  return (
    <div className="hobby">
      <Link href="/activity/[name]" as={`/activity/${name.toLowerCase()}`}>
        <a>
          <h3>{name}</h3>
          <img src={image.url} />
        </a>
      </Link>
    </div>
  );
}

export default Activity;
