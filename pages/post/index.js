import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";

import { getPostBySlug } from "../../queries/posts";

import Layout from "../../components/Layout";

import "./index.scss";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Post(props) {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body = [],
    seo = {},
    id = "Missing title",
  } = props;
  return (
    <Layout seo={seo} id={id}>
      <article>
        <h1>{title}</h1>
        <span>By {name}</span>
        {categories && (
          <ul>
            Posted in
            {categories.map(category => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        {authorImage && (
          <div>
            <img
              src={urlFor(authorImage)
                .width(50)
                .url()}
            />
          </div>
        )}
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: "max" }}
          {...client.config()}
        />
      </article>
    </Layout>
  );
}

Post.getInitialProps = async function({ query }) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = query;
  return await client.fetch(getPostBySlug, { slug });
};

export default Post;
