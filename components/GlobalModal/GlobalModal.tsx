import React, { useState, Fragment } from "react";
import { useGlobal } from "reactn";
import { Modal, Button } from "react-bootstrap";

import Views from "./Views";

export default function GlobalModal() {
  const [globalModal, setGlobalModal] = useGlobal("modal");
  const handleClose = () => setGlobalModal(null);
  const CurrentModal = Views[globalModal];
  let children = null;

  if (CurrentModal != null) {
    const { title, body, href, yesStr, noStr, yesFn } = Views[globalModal];
    const interaction = {};

    if (href) {
      interaction["href"] = href;
      interaction["target"] = "_blank";
    }

    if (yesFn) {
      interaction["onClick"] = (props) => yesFn(props);
    }

    let enableFooter = yesStr && noStr && (yesFn || href);

    children = (
      <Fragment>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{body}</Modal.Body>

        {enableFooter ? (
          <Modal.Footer>
            <Button onClick={() => setGlobalModal(null)} variant="secondary">
              {noStr}
            </Button>
            <Button {...interaction} variant="primary">
              {yesStr}
            </Button>
          </Modal.Footer>
        ) : null}
      </Fragment>
    );
  }

  return (
    <Modal show={children != null || globalModal != null} onHide={handleClose}>
      {children}
    </Modal>
  );
}
