import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/sanity";

export default function Tile({ name, image }) {
  return (
    <Link
      href="/activity/[name]"
      as={`/activity/${name.replace(/\s+/g, "-").toLowerCase()}`}>
      <a>
        <h3>{name}</h3>
        <img
          src={urlFor(image)
            .width(700)
            .height(700)
            .url()}
        />
      </a>
    </Link>
  );
}
