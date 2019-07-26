import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "sfrxzga1",
  dataset: "production",
  useCdn: true,
});
