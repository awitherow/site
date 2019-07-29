import sanity from "../../lib/sanity";

import { getAllActivities, getActivityByName } from "./queries";

export const getActivities = async (store, name) => {
  try {
    store.setState({
      activities: await sanity.fetch(getAllActivities),
    });
  } catch (e) {
    store.setState({ error: true });
  }
};

export const getActivity = async (store, name) => {
  try {
    store.setState({
      activity: await sanity.fetch(getActivityByName(name)),
    });
  } catch (e) {
    store.setState({ error: true });
  }
};
