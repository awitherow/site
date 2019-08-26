import ReactGA from "react-ga";

import keys from "./keys";

const isProduction = () => !window.location.host.includes("localhost");

export const initGA = () => {
  console.log("GA init");
  ReactGA.initialize(keys.ga);
};

export const logPageView = () => {
  if (isProduction()) {
    console.log(`Logging pageview for ${window.location.pathname}`);
    ReactGA.pageview(window.location.pathname);
  }
};

export const logEvent = (category = "", action = "") => {
  if (category && action && isProduction()) {
    console.log(`logging ${category}, ${action}`);
    ReactGA.event({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
