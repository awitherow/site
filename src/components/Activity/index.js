import React from "react";
import Link from "next/link";

import Product from "../../components/Product";
import { Divider } from "../../components/Layout";

import "./index.scss";

function Activity({ data, expanded }) {
  const { _id, name, image } = data;

  if (!_id) {
    return null;
  }

  console.log(data);

  const expansion = ({ tags, resources, description, products }) => {
    return (
      <div className="body">
        <div className="information">
          <h3>About {name} </h3>
          <Divider />
          <div className="tags">
            {tags.map(({ tag }, i) => (
              <div key={i} className="tag">
                {tag}
              </div>
            ))}
          </div>
          <p>{description}</p>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <Divider />
          <p>Coming soon...</p>
          {/* TODO: add RESOURCES (redo benefits) */}
        </div>
      </div>
    );
  };

  return (
    <div className={`hobby ${expanded && "expansion"}`}>
      <Link href="/activity/[name]" as={`/activity/${name.toLowerCase()}`}>
        <a>
          <h3>{name}</h3>
          <img src={image.url} />
        </a>
      </Link>
      {expanded && expansion(data)}
    </div>
  );
}

export default Activity;
