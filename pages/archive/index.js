import BlockContent from "@sanity/block-content-to-react";
import sanity, { urlFor } from "../../lib/sanity";
import { withRouter } from "next/router";
import Link from "next/link";

import { getAllBlogPosts } from "../../queries/posts";

import Layout from "../../components/Layout";
import Tags from "../../components/Tags";

import "./index.scss";

function Archive({ posts, seo }) {
  return (
    <Layout seo={seo} id="archive">
      <h2>The Best of High Vibes</h2>
      <ul>
        {posts.map(({ slug, title, description }, i) => (
          <li key={i}>
            <Link href={`/blog-post/${slug.current}`}>
              <a>
                <h3>{title}</h3>
              </a>
            </Link>
            <p>{`${description.substring(0, 140)}...`}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

Archive.getInitialProps = async function({ asPath }) {
  const posts = await sanity.fetch(getAllBlogPosts);

  const title = "Archive of All Blog Posts";
  const description =
    "A collection of all the blog posts from highvib.es. Each post contains quality content on topics like yoga, fitness, supplementation, hydration and more high vibrational activities. Our goal is to bring you the highest quality knowledge, succinctly communicated for optimal understanding, accompanied with a selection of quality products to help you live a higher vibrational lifestyle.";

  return {
    posts,
    seo: {
      title,
      description,
      openGraph: {
        url: `https://highvib.es${asPath}`,
        title,
        description,
      },
    },
  };
};

export default withRouter(Archive);
