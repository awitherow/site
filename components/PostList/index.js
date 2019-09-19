import React from "react";
import Post from "../Post";

import "./index.scss";

var newestFirst = function(a, b) {
  if (a._updatedAt > b._updatedAt) return -1;
  if (a._updatedAt < b._updatedAt) return 1;
  return 0;
};

export default function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts
        .sort(newestFirst)
        .slice(0, 3)
        .map((post, i) => {
          return <Post {...post} key={i} />;
        })}
    </div>
  );
}
