import React, { useEffect } from "react";
import { Divider } from "../Layout";
import buttons from "./buttons";
import { initGA, logEvent } from "../../lib/analytics";

export default function ShareIcons(url, img) {
  useEffect(() => {
    async function init() {
      if (!window.GA_INITIALIZED) {
        await initGA();
        window.GA_INITIALIZED = true;
      }
    }
    init();
  });

  return (
    <div className="share-icons">
      {buttons.map(({ id, component, shareComponent }) => (
        <component
          onBeforeClick={resolve => {
            logEvent(`share-button ${id}`, url);
          }}
          size={54}
          round={true}
          {...props}>
          {shareCount =>
            shareComponent != null ? (
              <span className="share-count">{shareCount}</span>
            ) : null
          }
        </component>
      ))}
    </div>
  );
}
