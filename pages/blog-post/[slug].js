import React, { useState } from "react";
import { withRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import sanity, { urlFor } from "../../lib/sanity";
import { getPostBySlug } from "../../queries/posts";

import Layout, { Divider } from "../../components/Layout";
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

  const [email_address, updateEmail] = useState("");
  const [fname, updateFName] = useState("");

  const handleSignup = async () => {
    const result = await axios.post("/mailchimp/subscribe", {
      email_address,
      fname,
    });

    console.log("hello");

    if (typeof result != Error) {
      console.log("yay");
    } else {
      console.log("uh oh");
    }
  };

  return (
    <Layout seo={seo} id="blog-post" fixedNav={true}>
      <div
        className="full-img"
        style={{
          background: `url(${urlFor(
            mainImage,
          ).url()}) no-repeat center center fixed`,
        }}
      />
      <div className="body">
        <article>
          <h1>{title}</h1>
          <span>By {name}</span>
          {tags && <Tags tags={tags.tags} />}
          <Divider type="left" />

          <BlockContent
            blocks={body}
            imageOptions={{ w: 754, fit: "max" }}
            {...sanity.config()}
          />
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <ShareIcons
              path={asPath}
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
        <div className="featured">
          <div className="newsletter-signup">
            <h3>Signup For Our Newsletter!</h3>
            <Divider />
            <Form>
              <Form.Group controlId="form">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  autoComplete="email"
                  value={email_address}
                  onChange={e => updateEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="firstname">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  autoComplete="name"
                  value={fname}
                  onChange={e => updateFName(e.target.value)}
                />
              </Form.Group>
              <Button onClick={() => handleSignup()} variant="primary">
                Sign up!
              </Button>
            </Form>
          </div>
        </div>
      </div>
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
        url: `https://highvib.es${asPath}`,
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

export default withRouter(Post);
