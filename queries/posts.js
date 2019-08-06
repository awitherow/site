import groq from "groq";

export const getPostBySlug = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    "authorImage": author->image,
    image,
    body
  }`;
