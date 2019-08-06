import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import sanity from "../../lib/sanity";

import { getPostBySlug } from "../../queries/posts";

import Layout from "../../components/Layout";
import Tags from "../../components/Tags";

import "./index.scss";

function urlFor(source) {
  return imageUrlBuilder(sanity).image(source);
}

function Post({ post, seo }) {
  const {
    title = "Missing title",
    name = "Missing name",
    tags,
    image,
    authorImage,
    body = [],
    id,
  } = post;

  return (
    <Layout seo={seo} id={id}>
      <article>
        <h1>{title}</h1>
        <span>By {name}</span>
        {tags && <Tags tags={tags} />}
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
          {...sanity.config()}
        />
      </article>
    </Layout>
  );
}

Post.getInitialProps = async function({ query }) {
  const { slug = "" } = query;
  const post = await sanity.fetch(getPostBySlug, { slug });

  return {
    post,
    seo: {
      title: post.title + " - hivib.es",
      description: post.description,
    },
  };
};

export default Post;
