import React from "react";

import Layout from "../../src/components/Layout";

function Mail({ seo }) {
  return (
    <Layout seo={seo} id="mail">
      Mail Page!
    </Layout>
  );
}

Mail.getInitialProps = async () => {
  return {
    seo: {
      title: "Free eBook From hivib.es | High Vibrational Habits",
      description:
        "High Vibrational Habits is a collection of the most Essential Habits and Lifestyle Adjustments, boiled down to their Essence so that you can absorb them, integrate them, and Live Your Best Life at your Highest Vibration! Evolve with us today.",
    },
  };
};

export default Mail;
