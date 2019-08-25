import React, { Fragment } from "react";
import { urlFor } from "../../lib/sanity";

import Divider from "../Layout/Divider";

export default function Jumbotron({ image, name, tags, description }) {
  return (
    <Fragment>
      <div
        className="activity-header"
        style={{
          background: `url(${urlFor(
            image,
          ).url()}) no-repeat center center fixed`,
        }}></div>
      <div className="activity-info">
        <h2>High Vibrational {name} </h2>
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
        <p>{description}</p>
      </div>
    </Fragment>
  );
}
