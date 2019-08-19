import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";
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

  const [fname, updateFName] = useState("");
  const [email, updateEmail] = useState("");

  async function submitMailchimpForm({ email_address, fname }) {
    await axios.post("/mailchimp/subscribe", { email_address, fname });
    updateFName("");
    updateEmail("");
  }

  function handleChange(type, value) {
    if (type === "email") {
      return updateEmail(value);
    }

    if (type === "fnname") {
      return updateFName(value);
    }
  }

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
          {tags && <Tags tags={tags} />}
          <h1>{title}</h1>
          <span>By {name}</span>
          <blockquote>{description}</blockquote>
          <BlockContent
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
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
        <div className="plugins">
          <h3>High Vibrational Newsletter</h3>
          <Divider />
          <p>
            Keep up to date with High Vibrational hacks, tips, tricks and
            articles in your inbox.
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={e => handleChange("email", e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formFirstName">
              <Form.Label>Preferred Name</Form.Label>
              <Form.Control
                type="text"
                autocomplete="name"
                placeholder="Enter Preferred Name"
                onChange={e => handleChange("fname", e.target.value)}
              />
            </Form.Group>
            <Button
              onClick={() =>
                submitMailchimpForm({ email_address: email, fname })
              }
              variant="primary">
              Sign Up
            </Button>
          </Form>
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
