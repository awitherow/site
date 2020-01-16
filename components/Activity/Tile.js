import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faStore } from "@fortawesome/free-solid-svg-icons";

import { urlFor } from "../../lib/sanity";

export default function Tile({
  name,
  image,
  slug,
  productCount = [],
  resourceCount = [],
}) {
  return (
    <Link
      href="/activity/[slug]"
      as={`/activity/${name.replace(/\s+/g, "-").toLowerCase()}`}>
      <a>
        <div className="stats">
          <span>
            {resourceCount.length} <FontAwesomeIcon icon={faNewspaper} />
          </span>
          <span>
            {productCount.length} <FontAwesomeIcon icon={faStore} />
          </span>
        </div>
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
