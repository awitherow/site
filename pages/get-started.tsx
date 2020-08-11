import React from "react";
import Layout, { SectionHeader } from "../components/Layout";
import Link from "next/link";
import "./get-started.scss";

const linkCategories = [
  {
    name: "Yoga and Meditation",
    links: [
      // {
      //   href: "https://insig.ht/austinwitherow",
      //   title: "Coming Soon: Free Guided Meditations on Insight Timer",
      //   subtitle: "Coming Soon: Guided meditations for sleep, alignment, focus and more!",
      // },
      // {
      //   href: "https://insig.ht/austinwitherow",
      //   title: "Free Online Yoga Classes",
      //   subtitle: "Enjoy Yoga from the comfort of your home. Classes available for all levels.",
      // }
      {
        href: "https://forms.gle/xrm2hNBxdzNysEaw9",
        title: "Schedule In Person or Online Private Lessons",
        subtitle: "Currently offering a variety of private options in Oahu, online worldwide."
      }
    ]
  },
  {
    name: "#essentialoilswork",
    links: [
      {
        href: "https://calendly.com/awitherow/wellness",
        title: "What Oils are Right for Me?",
        subtitle: "Get FREE personalised recommendations on Natural Solutions with Essential Oils.",
      },
      {
        href: "https://welcome.ly/p/wcDuqtokajQBcVj",
        title: "Free Course: Empowered Living with Essential Oils",
        subtitle: "Understand the Simple Science and Power of Purity of dōTERRAs Essential Oils",
      },
      {
        href:
          "https://www.doterra.com/US/en/p/healthy-habits-enrollment-kit?OwnerID=8122444",
        title: "Get Started Today with Healthy habits",
        subtitle: "Purchase as as Wholesale Customer and get this healthy habits bundle 25% off!",
      },
    ]
  },
  {
    name: "#ENTREPRENEURSHIP",
    links: [
      {
        href: "https://calendly.com/awitherow/coaching-clarity-session",
        title: "Schedule a Clarity Coaching Call",
        subtitle: "Got an Idea you wanna bring into Reality? Let's get some clarity here!",
      },
      {
        href:
          "https://www.youtube.com/watch?v=yAjLJA647-w&list=PL2IhiQCs6lsjX5GDKLKCACLzNiUdLCU-k",
        title: "Agile Business Solutions Playlist",
        subtitle: "Looking for free, simple tools for your small business?",
      }
    ]
  }
];
function GetStartePage({ seo }) {
  return (
    <Layout id="get-started-page" seo={seo}>
      <section>
        <div className="profile-header">
          <img src="static/img/me.jpg" className="profile-pic" />
        </div>
        <SectionHeader
          title="Tune Up Your Vibration"
          subtitle={
            <span>Looking to get started with living a higher vibrational lifestyle? Check out these quick resources! Otherwise <Link href="/">Browse Around</Link> :)</span>
          }
        />
        {linkCategories.map(({ name, links }, i) => (
          <div key={i} className="category-divider">
            <h3>{name}</h3>
            <div className="btn-container full-width">
              {links.map(({ href, title, subtitle }, i) => (
                <a key={i} href={href} className="btn btn-success">
                  <p className="title">{title}</p>
                  <p className="subtitle"><small>{subtitle}</small></p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}

GetStartePage.getInitialProps = async ({ query }) => {
  return {
    seo: {
      title: "HIGH VIB.ES Health and Wellness | Tune Up Your Vibration",
      description:
        "HIGH VIB.ES Health and Wellness. We promote a holistic approach to living a happy and healthy lifestyle by offering quality insights, wisdom, theory and application focused on empowering you Live Your Dream Life at its Highest Vibration. Tune in with us today and start living a life without regrets."
    }
  };
};

export default GetStartePage;
