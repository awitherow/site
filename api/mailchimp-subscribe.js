import Mailchimp from "mailchimp-api-v3";
const mailchimp = Mailchimp(process.env.mailchimp);

module.exports = async (req, res) => {
  const { email_address, fname } = req.body;
  try {
    const results = await mailchimp.post(
      `/lists/${process.env.list_id}/members`,
      {
        email_address,
        fname,
        status: "subscribed",
      },
    );
    return res.json(results);
  } catch (e) {
    return res.json(e);
  }
};
