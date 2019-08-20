import React from "react";
import { Button } from "react-bootstrap";
import { useGlobal } from "reactn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
          <FontAwesomeIcon icon={faEnvelope} /> Notify Me About New Posts!
        </Button>
      </h3>
      <Divider />
      {resources.length ? (
        <ul>
          {resources.map(({ title, slug }, i) => (
            <li key={i}>
              <Link
                prefetch
                href={`/blog-post/[slug]`}
                as={`/blog-post/${slug.current}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>New articles coming soon!</p>
      )}
    </div>
  );
}
