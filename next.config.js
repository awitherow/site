const withSass = require("@zeit/next-sass");
module.exports = withSass({
  typescript: {
    ignoreBuildErrors: true,
  },
});
