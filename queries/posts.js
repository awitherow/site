export const getPostBySlug = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "authorName": author->name,
  "categories": categories[]->title,
  mainImage {
    ...
  },
  body,
  products[]-> {
    link, title, image, description
  }
}`;

export const getFeaturedPosts = `*[_type == "post" && featured == true]{
  title,
  description,
  slug,
  "authorName": author->name,
  mainImage {
    ...
  },
}`;

export const getAllBlogPosts = `*[_type == "post"] | order(updatedNewestFirst) {
  title, slug, "authorName": author->name
}`;
