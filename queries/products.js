export const getAllProducts = `*[_type == "product"]{
    _id, description, link, title, creator,
    tags[] -> {
        tag
    },
    image {
        "url": asset->url
    },
  }`;

export const getProductBySlug = `*[_type == "product" && slug.current == $slug][0]{
    ...
  }`;
