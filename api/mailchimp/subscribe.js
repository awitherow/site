const Mailchimp = require("mailchimp-api-v3");
const mailchimp = new Mailchimp(process.env.mailchimp);

module.exports = async (req, res) => {
  const { email_address, first_name source } = req.body;

  try {
    const results = await mailchimp.post(
      `/lists/${process.env.list_id}/members`,
      {
        source,
        email_address,
        first_name,
        status: "subscribed",
      },
    );
    return res.json(results);
  } catch (e) {
    return res.json(e);
  }
};
