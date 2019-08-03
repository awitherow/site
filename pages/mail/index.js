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
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <h3>Table of Contents</h3>
            <ul>
              {book.chapters.map(chapter => (
                <li key={chapter}>{chapter}</li>
              ))}
            </ul>
          </div>
          <p>
            Sign up for our newsletter to reserve your eBook, today. We are
            still polishing up the chapters and will email it to you soon!
          </p>
          <Button
            variant="primary"
            href="http://eepurl.com/dE5G81"
            size="lg"
            target="_blank">
            Sign Up to Get Your Free eBook!
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
        "High Vibrational Lifestyle is a quick dive into 5 Essential Lifestyle that should constitute your day, boiled down to their Essence, for you to absorb and integrate, so that you can Live at your Highest Vibration. Product recommendations are also within to help you get vibe higher, faster.",
      chapters: [
        "Starting Each Day Right",
        "Biofuel for Your Rocket Ship",
        "Wheels Up for a Sustainable Flight",
        "Wheels Down for a Smooth Landing",
        "Catalyzing Your Chances for a Successful Tomorrow",
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
