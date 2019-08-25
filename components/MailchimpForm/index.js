import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const successMap = {
  "n/a": {
    text: "Sign up!",
    variant: "primary",
  },
  waiting: {
    text: "Processing...",
    variant: "warning",
  },
  good: {
    text: "Thanks for signing up!",
    variant: "success",
  },
  bad: {
    text: "Try again?",
    variant: "danger",
  },
};

export default function MailchimpForm({ source }) {
  const [email_address, updateEmail] = useState("");
  const [success, setSuccess] = useState("n/a");

  const handleSignup = async () => {
    setSuccess("waiting");
    const result = await axios.post("/api/mailchimp/subscribe", {
      source,
      email_address,
    });

    if (typeof result != Error) {
      setSuccess("good");
      // TODO: disable all email signup on that device for that list.
    } else {
      setSuccess("bad");
      //TODO: ROLLBAR
    }
  };

  return (
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
      <Button
        disabled={success === "good"}
        onClick={() => handleSignup()}
        variant={successMap[success].variant}>
        {successMap[success].text}
      </Button>
    </Form>
  );
}
