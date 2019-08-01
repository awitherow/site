const sanity = require("./src/lib/sanity");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/lifestyle": { page: "/lifestyle" },
    };

    activitiess.forEach(activity => {
      paths[`/activities/${activity.name}`] = {
        page: "/activity/[name]",
        query: { name: activity.name },
      };
    });

    return paths;
  },
});
