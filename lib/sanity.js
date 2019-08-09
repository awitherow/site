import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanity = sanityClient({
  projectId: "sfrxzga1",
  dataset: "production",
  useCdn: true,
});

export function urlFor(source) {
  return imageUrlBuilder(sanity).image(source);
}

export default sanity;
