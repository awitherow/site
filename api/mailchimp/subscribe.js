import Mailchimp from "mailchimp-api-v3";
const mailchimp = new Mailchimp(process.env.mailchimp);

module.exports = async (req, res) => {
  const { email_address, fname, source } = req.body;

  try {
    const results = await mailchimp.post(
      `/lists/${process.env.list_id}/members`,
      {
        source,
        email_address,
        merge_fields: {
          FNAME: fname,
        },
        status: "subscribed",
      },
    );

    console.log(results);
    return res.json(results);
  } catch (e) {
    return res.json(e);
  }
};
