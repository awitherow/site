import React from "react";
import Link from "next/link";

import { Divider } from "../../components/Layout";

import "./index.scss";

function Activity({ data, expanded }) {
  const { _id, name, image, tags, description } = data;

  if (!_id) {
    return null;
  }

  return (
    <div className={`activity ${expanded && "expansion"}`}>
      {!expanded ? (
        <Link href="/activity/[name]" as={`/activity/${name.toLowerCase()}`}>
          <a>
            <h3>{name}</h3>
            <img src={image.url} />
          </a>
        </Link>
      ) : (
        <div className="activity-header">
          <img src={image.url} />
          <div className="activity-header__info">
            <h2>About {name} </h2>
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
      )}
      {expanded && (
        <div className="resources">
          <h3>Essence of {name}</h3>
          <p className="sub-heading">
            Some recommendations that succinctly constitute the{" "}
            <strong>Essence of {name}</strong>.
          </p>
          <Divider />
          <p>Coming soon...</p>
        </div>
      )}
    </div>
  );
}

export default Activity;
