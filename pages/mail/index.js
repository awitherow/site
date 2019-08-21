import React from "react";
import Layout, { Divider } from "../../components/Layout";
import { Form, Button } from "react-bootstrap";

import { logEvent } from "../../lib/analytics";

import "./index.scss";

function Mail({ seo, book }) {
  return (
    <Layout seo={seo} id="mail">
      <div className="content">
        <img src="https://via.placeholder.com/500" />
        <div className="preform&form">
          <div className="preform">
            <h2>{book.title} eBook Preorder!</h2>
            <p>{book.description}</p>
            <h3>What You'll Get</h3>
            <ul>
              {book.get.map(get => (
                <li key={get}>
                  <i>{get}</i>
                </li>
              ))}
            </ul>
          </div>
          <p>
            Sign up for our newsletter to reserve your eBook, today. We are
            still polishing up the chapters and will email it to you soon!
          </p>
          <Button
            variant="success"
            href="https://mailchi.mp/a0c8d95ccbd3/highvibes-newsletter"
            onClick={e => logEvent("/mail.button", "exit to mailchimp signup")}
            target="_blank">
            Sign Up Today!
          </Button>
        </div>
      </div>
    </Layout>
  );
}

Mail.getInitialProps = async ({ asPath }) => {
  const title = "Free eBook From highvib.es | High Vibrational Lifestyle";
  const description =
    "High Vibrational Lifestyle is a quick dive into 5 Essential Lifestyle Routines that should constitute your day, boiled down to their Essence, for you to absorb and integrate, so that you can Live at your Highest Vibration.";
  return {
    book: {
      title: "High Vibrational Lifestyle",
      description,
      get: [
        "Achieve Your Dreams Through Proper Planning",
        "Build Rock Solid Confidence and Peace of Mind",
        "Tone and Shape up Your Beach Body",
        "Learn the Simple Key to Flow States",
        "See Life with Abundance and not Scarcity",
      ],
    },
    seo: {
      title,
      description,
      openGraph: {
        url: `https://highvib.es${asPath}`,
        title: title,
        description,
        images: [
          {
            url: "https://via.placeholder.com/500", // TODO: Set to eBook graphic URL
          },
        ],
      },
    },
  };
};

export default Mail;
