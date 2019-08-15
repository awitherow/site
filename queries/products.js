export const getAllProducts = `*[_type == "product"]{
    _id, description, link, name, creator,
    tags[] -> {
        tag
    },
    image {
        "url": asset->url
    },
  }`;
