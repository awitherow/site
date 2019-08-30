import React from "react";
import Post from "../Post";

import "./index.scss";

export default function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post, i) => {
        return <Post {...post} key={i} />;
      })}
    </div>
  );
}
