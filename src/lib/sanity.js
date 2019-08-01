var sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: "sfrxzga1",
  dataset: "production",
  useCdn: true,
});
