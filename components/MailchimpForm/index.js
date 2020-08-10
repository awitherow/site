import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import "./index.scss";

const successMap = {
  "n/a": {
    text: "Tune Up Today",
    variant: "success",
  },
  waiting: {
    text: "Processing...",
    variant: "warning",
  },
  good: {
    text: "Check Your Inbox for a Freebie!",
    variant: "light",
  },
  bad: {
    text: "Try again?",
    variant: "danger",
  },
};

export default function MailchimpForm({ source }) {
  const [email_address, updateEmail] = useState("");
  const [first_name, updateName] = useState("");
  const [success, setSuccess] = useState("n/a");

  const handleSignup = async () => {
    setSuccess("waiting");
    const result = await axios.post("/api/mailchimp/subscribe", {
      source,
      email_address,
      first_name,
    });

    if (typeof result != Error) {
      setSuccess("good");
      updateEmail("");
      updateName("");
      // TODO: disable all email signup on that device for that list.
    } else {
      setSuccess("bad");
      //TODO: ROLLBAR
    }
  };

  return (
    <div>
      <h2>Get More out of Life</h2>
      <p>
        As we grow, learn and evolve, we achieve higher states of vibration.
        With each new level, our life transforms in ways we never thought
        possible. Learn how to reach and maintain new heights with the High
        Vibes Digest. Sign up below and get the{" "}
        <strong>High Vibes Primer Course</strong>, Free.
      </p>

      <Form>
        <Form.Control
          type="text"
          placeholder="First Name"
          autoComplete="given-name"
          value={first_name}
          onChange={(e) => updateName(e.target.value)}
        />
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete="email"
          value={email_address}
          onChange={(e) => updateEmail(e.target.value)}
        />

        <div className="btn-container">
          <Button
            disabled={success === "good"}
            onClick={() => handleSignup()}
            variant={successMap[success].variant}
          >
            {successMap[success].text}
          </Button>
        </div>
      </Form>
    </div>
  );
}
