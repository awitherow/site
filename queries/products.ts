export const getAllProducts = `*[_type == "product"]{
    _id, description, link, title, creator, slug, featured,
    tags[] -> {
        tag
    },
    image {
        "url": asset->url
    },
    provider->{
        name
    }
  }`;

export const getProductBySlug = `*[_type == "product" && slug.current == $slug][0]{
    ..., featured,
    provider-> {
        name
    },
    tags[] -> {
        tag
    }
  }`;
