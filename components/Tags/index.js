import React from "react";
import "./index.scss";

export default function Tags({ tags = [] }) {
  return (
    <div className="tags">
      {tags.map(({ tag }, i) => (
        <div key={i} className="tag">
          {tag}
        </div>
      ))}
    </div>
  );
}
