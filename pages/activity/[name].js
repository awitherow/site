import React, { useState } from "react";
import { withRouter } from "next/router";
import { CardColumns } from "react-bootstrap";

import { logEvent } from "../../lib/analytics";

import Layout, { Divider } from "../../components/Layout";
import Activity from "../../components/Activity";
import Product from "../../components/Product";
import AlertDismissible from "../../components/AlertDismissible";

import sanity, { urlFor } from "../../lib/sanity";
import { getActivityByTitle } from "../../queries/activities";

import "./index.scss";

function ActivityPage({ activity = {}, seo }) {
  return (
    <Layout id="activity" seo={seo}>
      <Activity key={activity._id} data={activity} expanded />

      <div className="products">
        <h3>Essential Items</h3>
        <p className="sub-heading">
          Researched brands and products that are amongst the best in the world
          in terms of quality and price satisfaction.
        </p>

        <AlertDismissible />
        <Divider />

        <h5>
          {activity.products
            ? `${activity.products.length} Essential Product${
                activity.products.length === 1 ? "" : "s"
              }`
            : "Essential Products Coming Soon!"}
        </h5>

        {activity.products ? (
          <CardColumns>
            {activity.products.map(product => (
              <Product
                key={product._id}
                {...product}
                onClick={e =>
                  logEvent(
                    `/activity/${activity.title}`,
                    `product ${activity.title} comission click`,
                  )
                }
              />
            ))}
          </CardColumns>
        ) : null}
      </div>
    </Layout>
  );
}

ActivityPage.getInitialProps = async ({ query, asPath }) => {
  const activity = await sanity.fetch(getActivityByTitle(query.name));

  const { image, title, description } = activity;

  const modifiedTitle = `High Vibational ${title}`;

  return {
    activity,
    seo: {
      title: modifiedTitle,
      description,
      openGraph: {
        url: `https://highvib.es${asPath}`,
        title: modifiedTitle,
        description,
        images: [
          {
            url: urlFor(image)
              .height(800)
              .width(800)
              .url(),
            width: 800,
            height: 800,
            alt: "description",
          },
        ],
      },
    },
  };
};

export default ActivityPage;
