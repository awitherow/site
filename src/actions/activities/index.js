import sanity from "../../lib/sanity";

import { getAllActivities, getActivityByName } from "./queries";

export const getActivities = async (store, name) => {
  if (!store.state.loading) {
    store.setState({ loading: true });
  }

  try {
    store.setState({
      activities: await sanity.fetch(getAllActivities),
      loading: false,
    });
  } catch (e) {
    store.setState({ error: true });
  }
};

export const getActivity = async (store, name) => {
  if (!store.state.loading) {
    store.setState({ loading: true });
  }

  try {
    store.setState({
      activity: await sanity.fetch(getActivityByName(name)),
      loading: false,
    });
  } catch (e) {
    store.setState({ error: true });
  }
};
