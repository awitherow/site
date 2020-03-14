import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import "./index.scss"

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
      first_name
    });

    if (typeof result != Error) {
      setSuccess("good");
      updateEmail("")
      updateName("")
      // TODO: disable all email signup on that device for that list.
    } else {
      setSuccess("bad");
      //TODO: ROLLBAR
    }
  };

  return (
    <div>
      <h2>Tune Up Your Vibration, Manifest Your Dream Life</h2>
      <p>
        Tune Up Your Life with our bite-sized weekly Health, Hacks and Highdeas Email Newsletter.
      </p>
      <Form>

        <Form.Control
          type="text"
          placeholder="First Name"
          autoComplete="given-name"
          value={first_name}
          onChange={e => updateName(e.target.value)}
        />
        <Form.Control
          type="email"
          placeholder="Enter email"
          autoComplete="email"
          value={email_address}
          onChange={e => updateEmail(e.target.value)}
        />


        <div className="btn-container">
          <Button
            disabled={success === "good"}
            onClick={() => handleSignup()}
            variant={successMap[success].variant}>
            {successMap[success].text}
          </Button>
        </div>
      </Form>
    </div>
  );
}
