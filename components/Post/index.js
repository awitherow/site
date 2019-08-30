import React from "react";
import moment from "moment";
import { urlFor } from "../../lib/sanity";
import { Button } from "react-bootstrap";
import Link from "next/link";

import "./index.scss";

export default function Post({
  title,
  slug,
  description,
  mainImage,
  _updatedAt,
  name,
}) {
  return (
    <div className="post">
      <img
        src={urlFor(mainImage)
          .height(750)
          .width(750)
          .url()}
      />
      <div className="post-body">
        <h4>{title}</h4>
        <h5>
          Published on{" "}
          {moment(_updatedAt)
            .format("MMMM Do YYYY")
            .toString()}{" "}
          by {name}
        </h5>
        <p>{description}</p>
        <Link
          prefetch
          href={`/blog-post/[slug]`}
          as={`/blog-post/${slug.current}`}>
          <a className="btn btn-success">Read More</a>
        </Link>
      </div>
    </div>
  );
}
