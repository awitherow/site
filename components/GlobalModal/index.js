import React, { useState } from "react";
import { useGlobal } from "reactn";
import { Modal, Button } from "react-bootstrap";

import Views from "./Views";

export default function GlobalModal() {
  const [modal, setModal] = useGlobal("modal");
  const handleClose = () => setModal(null);
  const CurrentModal = Views[modal];
  let children = null;

  if (CurrentModal != null) {
    const { title, body, href, yesStr, noStr, yesFn } = Views[modal];
    const interaction = {};

    if (href) {
      interaction["href"] = href;
      interaction["target"] = "_blank";
    }

    if (yesFn) {
      interaction["onClick"] = props => yesFn(props);
    }

    console.log(interaction);

    children = (
      <>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{body}</Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setModal(null)} variant="secondary">
            {noStr}
          </Button>
          <Button {...interaction} variant="primary">
            {yesStr}
          </Button>
        </Modal.Footer>
      </>
    );
  }

  return (
    <Modal show={children != null} onHide={handleClose}>
      {children}
    </Modal>
  );
}
