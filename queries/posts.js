import groq from "groq";

export const getPostBySlug = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  mainImage {
    ...
  },
  body
}`;

export const getAllBlogPosts = groq`*[_type == "post"]{
  title, slug, description
}`;
