import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export default function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        We use affiliate links, meaning that highvib.es receives a commission on
        the products below — hope you enjoy the highvib.es!
      </Alert>
    );
  }
  return null;
}
