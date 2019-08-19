var Mailchimp = require("mailchimp-api-v3");
var mailchimp = new Mailchimp(process.env.MAILCHIMP);

module.exports = async (req, res) => {
  const { email_address, fname } = req.body;
  const list_id = process.env.LIST_ID;

  try {
    const result = await mailchimp.post(`lists/${list_id}/members`, {
      email_address,
      fname,
      status: "subscribed",
    });
    res.send({ result, message: "Signed up!" });
  } catch (e) {
    res.send({ result: error, message: "Sign up failed!" });
  }
};
