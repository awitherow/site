import React from "react";
import Layout, { Divider } from "../../src/components/Layout";
import { Form, Button } from "react-bootstrap";

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
            href="http://eepurl.com/dE5G81"
            target="_blank">
            Sign Up Today!
          </Button>
        </div>
      </div>
    </Layout>
  );
}

Mail.getInitialProps = async () => {
  return {
    book: {
      title: "High Vibrational Lifestyle",
      description:
        "High Vibrational Lifestyle is a quick dive into 5 Essential Lifestyle Routines that should constitute your day, boiled down to their Essence, for you to absorb and integrate, so that you can Live at your Highest Vibration.",
        get: [
          "Achieve Your Dreams Through Proper Planning",
          "Build Rock Solid Confidence and Peace of Mind",
          "Tone and Shape up Your Beach Body"
          "Learn the Simple Key to Flow States",
          "See Life with Abundance and not Scarcity",
        ],
    },
    seo: {
      title: "Free eBook From hivib.es | High Vibrational Lifestyle",
      description:
        "High Vibrational Lifestyle is a collection of the most Essential and Lifestyle Enhancements, boiled down to their Essence so that you can absorb them, integrate them, and Live Your Best Life at your Highest Vibration! Evolve with us today.",
    },
  };
};

export default Mail;
