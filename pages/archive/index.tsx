import BlockContent from "@sanity/block-content-to-react";
import sanity from "../../lib/sanity";
import moment from "moment";
import { withRouter } from "next/router";
import Link from "next/link";

import { getAllBlogPosts } from "../../queries/posts";

import Layout, { Divider } from "../../components/Layout";
import Tags from "../../components/Tags";

import "./index.scss";

// const formatPostStructure = posts => {
//   let final = []

//   posts.forEach(post => {
//     const yearCreated = moment(post._createdAt).year();
//     const monthCreated = moment(post._createdAt).month();

//     var months = ["January", "February", "March", "April", "May", "June",
//       "July", "August", "September", "October", "November", "December"];

//     if (!final.length) {
//       final.push({
//         yearCreated,
//         postsByMonth: []
//       })

//     }

//     final = final.map(o => {
//       if (o.yearCreated === yearCreated) {
//         if (!o.postsByMonth.length) {
//           postsByMonth.push({
//             monthCreated,
//             posts: []
//           })
//         } else {
//           o.postsByMonth.map(o => {
//             if (o.monthCreated === monthCreated) {
//               return Object.assign({}, o, { posts: o.posts.push[article] })
//             }
//           })
//         }
//       }
//     })
//   })
// }

const Archive = ({ posts, seo }) => (
  <Layout seo={seo} id="archive">
    <div className="all-posts">
      <h2>The Best of the High Vibes Blog</h2>
      <Divider type="left" />
      <div>
        {posts
          .sort((a, b) => moment(b._createdAt) - moment(a._createdAt))
          .map(({ slug, title, tags, _createdAt }, i) => (
            <div style={{ marginBottom: "1rem" }} key={i}>
              <Link href={`/blog-post/${slug.current}`}>
                <a>
                  <span style={{ fontSize: 24 }}>{title}</span>
                </a>
              </Link>
              <p>{moment(_createdAt).format("MMMM DD, YYYY")}</p>
            </div>
          ))}
      </div>
    </div>
  </Layout>
);

Archive.getInitialProps = async function ({ asPath }) {
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
