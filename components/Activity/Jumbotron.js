import React from "react";
import { urlFor } from "../../lib/sanity";

import Divider from "../Layout/Divider";

export default function Jumbotron({ image, name, tags, description }) {
  return (
    <div className="activity-header">
      <img
        src={urlFor(image)
          .height(500)
          .width(1600)
          .url()}
      />
      <div className="activity-header__info">
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
    </div>
  );
}
