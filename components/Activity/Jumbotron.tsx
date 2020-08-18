import React from "react";
import { urlFor } from "../../lib/sanity";

import Divider from "../Layout/Divider";
import Block from "../Block";

export default function Jumbotron({ image, title, tags, body, description }) {
  console.log(body);
  return (
    <>
      <div
        className="activity-header"
        style={{
          background: `url(${urlFor(
            image
          ).url()}) no-repeat center center fixed`,
        }}
      />
      <div className="activity-info">
        <h2>{title}</h2>
        <Divider />
        <h3>Searchable Tags</h3>
        <div className="tags">
          {tags.map(({ tag }, i) => (
            <div key={i} className="tag">
              {tag}
            </div>
          ))}
        </div>
        <h3>Description</h3>
        {Boolean(body) ? <Block content={body} /> : <p>{description}</p>}
      </div>
    </>
  );
}
