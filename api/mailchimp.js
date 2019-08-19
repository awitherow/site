var Mailchimp = require("mailchimp-api-v3");

var mailchimp = new Mailchimp(process.env.MAILCHIMP);

module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};
