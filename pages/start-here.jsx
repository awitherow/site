import React, { useState, Fragment } from "react";
import { withRouter } from "next/router";
import { Card, Form, Button } from "react-bootstrap";

import { logEvent } from "../../lib/analytics";

import sanity, { urlFor } from "../../lib/sanity";
import { getProductBySlug } from "../../queries/products";

import Layout, { Divider } from "../../components/Layout";
import MailchimpForm from "../../components/MailchimpForm";
import ShareIcons from "../../components/ShareIcons";
import Feature from "../../components/Feature";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

function StartHerePage({ seo }) {
  return (
    <Layout seo={seo} id="product-showcase">
      <section>
        to get <strong>the most out of life</strong>, it's imperative to{" "}
        <strong>tune up your vibration</strong>. how?
      </section>
      <section>
        disillusioned, noise, uncertainty, too challenging, ineffective,
        bullshit, etc.
      </section>
      <section>
        self healing, growth, tried and true, tested, pure, effective,
        efficient, relief
      </section>
      <section>
        <ul>
          <li>
            nutrition, hydration, athleticism, logevity, performance, rest,{" "}
          </li>
          <li>breathwork, yoga, meditation, </li>
          <li>
            coaching strategy, business tools, financial, journaling, self
            discovery, entrepreneurship
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>what the fuck did you do with your life?</li>
          <li>satisfied grin at all the awesomness you achieved</li>
        </ul>
      </section>
    </Layout>
  );
}

StartHerePage.getInitialProps = async function() {
  // TODO: load image for start page
  return {
    seo: {
      title: "Tune Up Your Vibrataion | LIVE YOUR DREAM LIFE | HIGHVIB.ES",
      description:
        "In our quest to express our highest potential, we have to know that we are on the right path, and without the right toolset and guidance, we're as good as lost. Welcome to HIGHVIB.ES Health and Wellness, your safe harbor along the path to your highest potential. Learn the latest health and wellness tips to give yourself the best chance, and equip yourself with hacks and highdeas for truly empowered expression of your highest goals and aspirations. Glad to have you here. Before you head out on your own again, make sure to sign up for the email newsletter for weekly tuneups.",
      openGraph: {
        url: `https://highvib.es`,
        title,
        description,
        images: [
          // {
          //   url: urlFor(image)
          //     .height(800)
          //     .width(800)
          //     .url(),
          //   width: 800,
          //   height: 800,
          //   alt: description
          // }
        ]
      }
    }
  };
};

export default withRouter(Product);
