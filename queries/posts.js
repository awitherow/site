export const getPostBySlug = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  mainImage {
    ...
  },
  body
}`;

export const getFeaturedPosts = `*[_type == "post" && featured == true]{
  title,
  description,
  slug,
  "name": author->name,
  mainImage {
    ...
  },
}`;

export const getAllBlogPosts = `*[_type == "post"] | order(updatedNewestFirst) {
  title, slug, "name": author->name
}`;
