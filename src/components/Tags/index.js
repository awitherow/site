import React from "react";
import "./index.scss";

function Tags(tags) {
  if (tags.length) {
    return (
      <div className="tags">
        {tags.map(({ tag }, i) => (
          <div key={i} className="tag">
            {tag}
          </div>
        ))}
      </div>
    );
  } else return null;
}

export default Tags;
