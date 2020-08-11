import React from "react";
import { Button } from "react-bootstrap";
import { useGlobal } from "reactn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import PostList from "../PostList";
import Divider from "../Layout/Divider";

export default function Resources({ title = "", resources = [] }) {
  const [modal, setModal] = useGlobal("modal");

  return (
    <div className="resources">
      <div className="container" style={{ maxWidth: 1055 }}>
        <h3>
          Blog Posts{" "}
          <Button
            size="sm"
            variant="primary"
            onClick={() => setModal("MailchimpSignup")}
          >
            <FontAwesomeIcon icon={faEnvelope} /> Notify Me!
          </Button>
        </h3>
        <Divider />
        {resources.length ? (
          <PostList posts={resources} />
        ) : (
          <p>New articles coming soon!</p>
        )}
      </div>
    </div>
  );
}
