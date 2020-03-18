import React from "react";
import Layout, { SectionHeader } from "../components/Layout";
import Link from "next/link";
import "./get-started.scss";

const linkCategories = [
  {
    name: "Yoga and Meditation",
    links: [
      {
        href: "https://insig.ht/austinwitherow",
        title: "Coming Soon: Free Guided Meditations on Insight Timer",
        subtitle: "Coming Soon: Guided meditations for sleep, alignment, focus and more!",
      },
      {
        href: "https://insig.ht/austinwitherow",
        title: "Free Online Yoga Classes",
        subtitle: "Enjoy Yoga from the comfort of your home. Classes available for all levels.",
      }
    ]
  },
  {
    name: "Natural Solutions with Essential Oils",
    links: [
      {
        href: "https://calendly.com/awitherow/wellness",
        title: "Schedule a Free Wellness Consultation",
        subtitle: "Find out Which Essential Oils are Right For You!",
      },
      {
        href: "https://welcome.ly/p/wcDuqtokajQBcVj",
        title: "Learn: Empowered Living with Essential Oils",
        subtitle: "Understand the Simple Science and Power of Purity of dōTERRAs Essential Oils",
      },
      {
        href:
          "https://www.doterra.com/US/en/p/healthy-habits-enrollment-kit?OwnerID=8122444",
        title: "Building Healthy Habits",
        subtitle: "This Enrollment Kit is perfect for building holistic healthy daily habits",
      },
      {
        href:
          "https://www.doterra.com/US/en/p/healthy-home-enrollment-kit?OwnerID=8122444",
        title: "Create a Healthier Home",
        subtitle: "Replace Toxic Products for a Healthy Home with this Enrollment Kit",
      },
      {
        href:
          "https://www.doterra.com/US/en/p/natural-solutions-enrollment-kit?OwnerID=8122444",
        title: "Natural Solutions",
        subtitle: "This Comprehensive Enrollment Kit is the all in one package for a truly holistic lifestyle",
      }
    ]
  },
  {
    name: "Lean Entrepreneurship",
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
          <p>
            👋 Hi, I'm Austin Witherow. I'm a 500 Hour Yoga and Meditation
            Instructor, Digital Nomad and dōTERRA Wellness Advocate. This{" "}
            <strong>Get Started</strong> page is focused on Action. Check out
            the links below for the best direction for Tuning Up Your Vibration
            and Achieving Your Dreams. Otherwise, check out the{" "}
            <Link href="/">Home Page</Link> or the{" "}
            <Link href="/archive">Blog Archive</Link> to get the full tuneup!
          </p>
        </div>
        <SectionHeader
          title="Tune Up Your Vibration"
          subtitle="Looking to get started with living a higher vibrational lifestyle? Check out these quick resources!"
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
