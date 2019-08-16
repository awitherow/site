import React from "react";
import Link from "next/link";

import Divider from "../Layout/Divider";

export default function Resources({ name = "", resources = [] }) {
  return (
    <div className="resources">
      <h3>Featured Blog Posts About {name}</h3>
      <Divider />
      <ul>
        {resources.length ? (
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
  );
}
