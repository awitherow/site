const sanity = require("./src/lib/sanity");
const Activities = require("./src/actions/activities/queries");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/lifestyle": { page: "/lifestyle" },
    };

    const activities = await sanity.fetch(Activities.getAllActivities);

    activities.forEach(activity => {
      paths[`/activity/${activity.name.toLowerCase()}`] = {
        page: "/activity/[name]",
        query: { name: activity.name.toLowerCase() },
      };
    });

    return paths;
  },
});
