import React from "react";
import useGlobalHook from "./use-global";

import * as actions from "../actions";

// general state of the app
const initialAppState = {
  error: false,
};

const initialState = {
  ...initialAppState,
  activity: {},
  activities: {},
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
