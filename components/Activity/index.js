import React from "react";
import Link from "next/link";

import { Divider } from "../Layout";

import "./index.scss";

function Activity({ data, expanded }) {
  const { _id, name, image, tags, description, resources } = data;

  if (!_id) {
    return null;
  }

  return (
    <div className={`activity ${expanded && "expansion"}`}>
      {!expanded ? (
        <Link
          href="/activity/[name]"
          as={`/activity/${name.replace(/\s+/g, "-").toLowerCase()}`}>
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
          <h3>Everything to Know About {name}</h3>
          <p className="sub-heading">
            Only the Best Articles that succinctly constitute the
            <strong> Essence of {name}</strong>.
          </p>
          <Divider />
          <ul>
            {resources ? (
              resources.map(({ title, slug }, i) => (
                <li key={i}>
                  <Link
                    prefetch
                    href={`/blog-post/[slug]`}
                    as={`/blog-post/${slug.current}`}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))
            ) : (
              <li>Resources coming soon!</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Activity;
