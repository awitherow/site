import React from "react";
import Layout, { SectionHeader } from "../components/Layout";
import "./get-started.scss";

const linkCategories = [
  {
    name: "Yoga and Meditation",
    links: [
      {
        href: "insig.ht/austinwitherow",
        title: "Free Guided Meditations on Insight Timer"
      }
    ]
  },
  {
    name: "Natural Solutions with Essential Oils",
    links: [
      {
        href: "https://calendly.com/awitherow/wellness",
        title: "Schedule a Wellness Consultation"
      },
      {
        href: "https://welcomely.growthtools.com/p/wcDuqtokajQBcVj",
        title: "Learn: Empowered Living with Essential Oils"
      },
      {
        href:
          "https://www.doterra.com/US/en/p/healthy-habits-enrollment-kit?OwnerID=8122444",
        title: "(Recommended) dōTERRA Essential Oils Healthy Habits Kit"
      }
    ]
  },
  ,
  {
    name: "Lean Entrepreneurship",
    links: [
      {
        href: "https://calendly.com/awitherow/coaching-clarity-session",
        title: "Schedule a Clarity Coaching Call"
      },
      {
        href:
          "https://www.youtube.com/watch?v=yAjLJA647-w&list=PL2IhiQCs6lsjX5GDKLKCACLzNiUdLCU-k",
        title: "Agile Business Solutions Youtube Playlist"
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
          <p>👋 Hi, I'm Austin Witherow. I'm 500 Hou</p>
        </div>
        <SectionHeader
          title="Tune Up Your Vibration"
          subtitle="Looking to get started with living a higher vibrational lifestyle? Check out these quick resources!"
        />
        {linkCategories.map(({ name, links }) => (
          <div className="category-divider">
            <h4>{name}</h4>
            <div className="btn-container full-width">
              {links.map(({ href, title, subtitle }) => (
                <a href={href} className="btn btn-gold">
                  <span className="title">{title}</span>
                  <span className="subtitle">{subtitle}</span>
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
