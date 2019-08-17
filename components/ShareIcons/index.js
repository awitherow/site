import React, { useEffect } from "react";
import { withRouter } from "next/router";
import { Divider } from "../Layout";
import buttons from "./buttons";
import { initGA, logEvent } from "../../lib/analytics";

import "./index.scss";

function ShareIcons({ path, ...props }) {
  useEffect(() => {
    async function init() {
      if (!window.GA_INITIALIZED) {
        await initGA();
        window.GA_INITIALIZED = true;
      }
    }
    init();
  }, []);

  return (
    <div className="share-icons-container">
      <h2>Share on Social Media!</h2>
      <Divider />

      <div className="share-icons">
        {buttons.map(({ id, Component, Icon }) => (
          <Component
            url={`https://highvib.es${path}`}
            key={id}
            onBeforeClick={resolve => {
              console.log("log event sharebutton");
              logEvent(`share-button ${id}`, url);
              resolve();
            }}
            {...props}>
            <Icon size={48} round />
          </Component>
        ))}
      </div>
    </div>
  );
}

export default withRouter(ShareIcons);
