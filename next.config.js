const sanity = require("./src/lib/sanity");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  // exportPathMap: async function() {
  //   const paths = {
  //     "/": { page: "/" },
  //     "/lifestyle": { page: "/lifestyle" },
  //   };
  //   const activities = await sanity.fetch(`
  //     *[_type == 'hobby']{
  //         name
  //     }`);
  //   activities.forEach(activity => {
  //     paths[`/activity/${activity.name.toLowerCase()}`] = {
  //       page: "/activity/[name]",
  //       query: { name: activity.name.toLowerCase() },
  //     };
  //   });
  //   return paths;
  // },
});
