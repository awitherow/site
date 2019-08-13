import BlockContent from "@sanity/block-content-to-react";
import sanity, { urlFor } from "../../lib/sanity";

import { getPostBySlug } from "../../queries/posts";

import Layout from "../../components/Layout";
import Tags from "../../components/Tags";
import ShareIcons from "../../components/ShareIcons";

import "./index.scss";

function Post({ post, seo, asPath }) {
  const {
    title = "Missing title",
    name = "Missing name",
    tags,
    mainImage,
    description,
    body = [],
    id,
  } = post;

  return (
    <Layout seo={seo} id={id} fixedNav={true}>
      <div
        className="full-img"
        style={{
          background: `url(${urlFor(
            mainImage,
          ).url()}) no-repeat center center fixed`,
        }}>
        <h1>{title}</h1>
        <span>By {name}</span>
      </div>
      <article>
        {tags && <Tags tags={tags} />}
        <blockquote>{description}</blockquote>
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: "max" }}
          {...sanity.config()}
        />
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <ShareIcons
            title={title}
            description={description}
            caption={description}
            media={urlFor(mainImage).url()}
            image={urlFor(mainImage).url()}
            subject={`Check out this article, ${title}, from highvib.es`}
            body="I found this pretty useful and wanted to share it with you!"
            openWindow={true}
            tags={tags}
            quote={description}
          />
        </div>
      </article>
    </Layout>
  );
}

Post.getInitialProps = async function({ query, asPath }) {
  const { slug = "" } = query;
  const post = await sanity.fetch(getPostBySlug, { slug });

  const { title, description, mainImage, name, publishedAt, tags } = post;
  const nameSplit = name.split();

  return {
    post,
    seo: {
      title,
      description,
      openGraph: {
        url: asPath,
        title,
        description,
        images: [
          {
            url: urlFor(mainImage),
          },
        ],
        profile: {
          firstName: nameSplit[0],
          lastName: nameSplit[1],
          username: `${nameSplit[0]}${nameSplit[1]}`,
          gender: "male", // TODO: sanity option
        },
        article: {
          publishedTime: publishedAt,
          authors: [name],
          // section: TODO: sanity option.
          tags: tags,
        },
      },
    },
  };
};

export default Post;
