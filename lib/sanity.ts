import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import keys from "./keys";

const { projectId, dataset } = keys.sanity;

const sanity = sanityClient({
  projectId,
  dataset,
  useCdn: true,
});

export function urlFor(source) {
  return imageUrlBuilder(sanity).image(source);
}

export default sanity;
