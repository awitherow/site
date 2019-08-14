import groq from "groq";

export const getAllProducts = groq`*[_type == "product"]{
    _id, description, link, name, creator,
    tags[] -> {
        tag
    },
    image {
        "url": asset->url
    },
  }`;
