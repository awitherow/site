export const toggleLoading = async (store, loading) => {
  if (loading != undefined) {
    store.setState({ loading });
    return;
  }

  store.setState({ loading: !store.state.loading });
};
