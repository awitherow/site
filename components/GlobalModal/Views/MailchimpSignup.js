import MailchimpForm from "../../MailchimpForm";

export default props => ({
  title: "Sign Up For Our Mailing List!",
  body: <MailchimpForm source="modal-popup" />,
  ...props,
});
