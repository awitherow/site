import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import "./index.scss"

const successMap = {
  "n/a": {
    text: "Tune Up Today",
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
      // TODO: disable all email signup on that device for that list.
    } else {
      setSuccess("bad");
      //TODO: ROLLBAR
    }
  };

  return (
    <div>
      <h2>Your Life At It's Highest Vibrataion, A Click Away</h2>
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

                

                <Button
                    disabled={success === "good"}
                    onClick={() => handleSignup()}
                    variant={successMap[success].variant}>
                    {successMap[success].text}
                  </Button>
              <Form.Text className="text-muted">
                Your Email is safe here.
              </Form.Text>
            </Form>
    </div>
  );
}
