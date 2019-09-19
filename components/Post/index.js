import React from "react";
import moment from "moment";
import { urlFor } from "../../lib/sanity";
import { Button } from "react-bootstrap";
import Link from "next/link";

import { Divider } from "../Layout";

import "./index.scss";

export default function Post({
  title,
  slug,
  description,
  mainImage,
  _updatedAt,
  authorName,
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
          <small>
            Published on{" "}
            {moment(_updatedAt)
              .format("MMMM Do YYYY")
              .toString()}{" "}
            by {authorName}
          </small>
        </h5>
        <Divider type="left" />
        <p>{description}</p>
        <Link
          prefetch
          href={`/blog-post/[slug]`}
          as={`/blog-post/${slug.current}`}>
          <a className="btn btn-primary">Read More</a>
        </Link>
      </div>
    </div>
  );
}
