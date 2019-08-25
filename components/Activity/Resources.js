import React from "react";
import { Button } from "react-bootstrap";
import { useGlobal } from "reactn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { urlFor } from "../../lib/sanity";

import Divider from "../Layout/Divider";

export default function Resources({ name = "", resources = [] }) {
  const [modal, setModal] = useGlobal("modal");

  return (
    <div className="resources">
      <h3>
        Featured Blog Posts About {name}{" "}
        <Button
          size="sm"
          variant="primary"
          onClick={() => setModal("MailchimpSignup")}>
          <FontAwesomeIcon icon={faEnvelope} /> Notify Me!
        </Button>
      </h3>
      <Divider />
      {resources.length ? (
        <div className="post-list">
          {resources.map(({ title, slug, description, mainImage }, i) => (
            <div className="post" key={i}>
              <img
                src={urlFor(mainImage)
                  .height(750)
                  .width(750)
                  .url()}
              />
              <div className="post-body">
                <h4>{title}</h4>
                <p>{description}</p>
                <Link
                  prefetch
                  href={`/blog-post/[slug]`}
                  as={`/blog-post/${slug.current}`}>
                  <a className="btn btn-success">Read More</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>New articles coming soon!</p>
      )}
    </div>
  );
}
