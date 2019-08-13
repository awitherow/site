import React, { useState } from "react";
import { Divider } from "../Layout";
import buttons from "./buttons";

export default function ShareIcons(url, img) {
  const [fullScreen, setFullScreen] = useState(false);

  const getProps = function({ url, img }) {
    props = { url };
    if (img) {
      props.media = img;
    }
    return props;
  };

  const buttons = fullScreen ? buttons : buttons.slice(0, 5);

  return (
    <div className={`share-icons ${fullScreen ? "full-screen" : ""}`}>
      {buttons.map(({ id, component, shareComponent }) => (
        <component size={54} round={true} {...getProps(url, img)}>
          {shareCount =>
            shareComponet != null ? (
              <span className="share-count">{shareCount}</span>
            ) : null
          }
        </component>
      ))}
    </div>
  );
}
