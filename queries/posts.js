export const getPostBySlug = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  mainImage {
    ...
  },
  body
}`;

export const getAllBlogPosts = `*[_type == "post"]{
  title, slug, description
}`;
