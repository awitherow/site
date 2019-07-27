import React from "react";
import { Form, Button } from "react-bootstrap";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://awitherow.us19.list-manage.com/subscribe/post?u=c60ea29dfa8a09bdd8e0cca02&amp;id=3f3895ba76";

function Mailchimp() {
  return <MailchimpSubscribe url={url} />;
}

export default Mailchimp;
