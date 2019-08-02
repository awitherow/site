import React from "react";

import Layout from "../../src/components/Layout";

function Lifestyle({ seo }) {
  return (
    <Layout seo={seo} id="lifestyle">
      Lifestyle Page!
    </Layout>
  );
}

Lifestyle.getInitialProps = async () => {
  return {
    seo: {
      title: "hivib.es | A Higher Vibration Lifestyle",
      description:
        "We promote the kind of amazing life that leaves you gasping in a rush of ecstacy due to its sheer awesomeness. We provide the knowledge and simplest but yet most effective solutions for attaining that in all of life's adventures.",
    },
  };
};

export default Lifestyle;
