import React from "react";
import "./index.scss";

export default function Tags({ tags = [], type = "" }) {
  return (
    <div className="tags">
      {tags.map(({ tag }, i) => (
        <div key={i} className={`tag ${type}`}>
          {tag}
        </div>
      ))}
    </div>
  );
}
