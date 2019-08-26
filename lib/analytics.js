import ReactGA from "react-ga";

import keys from "./keys";

const isProduction = () => {
  return !window.location.host === "localhost:3000";
};

export const initGA = () => {
  console.log("GA init");
  console.log(isProduction());
  ReactGA.initialize(keys.ga);
};

export const logPageView = () => {
  if (isProduction()) {
    console.log(`Logging pageview for ${window.location.pathname}`);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview;
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
