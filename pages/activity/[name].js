import React, { useState } from "react";
import { withRouter } from "next/router";
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  Card,
  CardColumns,
  Dropdown,
} from "react-bootstrap";

import { logEvent } from "../../lib/analytics";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Layout, { Divider } from "../../components/Layout";
import Activity from "../../components/Activity";
import Tags from "../../components/Tags";
import AlertDismissible from "../../components/AlertDismissible";

import sanity from "../../lib/sanity";
import { getActivityByName } from "../../queries/activities";

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

        {/* <h4>Filter items by...</h4>
          <ButtonToolbar id="filter-bar">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-type">
                Type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-tag">
                Tag
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <ButtonGroup aria-label="Cost range">
              <Button variant="success">$</Button>
              <Button variant="success">$$$</Button>
              <Button variant="success">$$$</Button>
            </ButtonGroup>
          </ButtonToolbar> */}

        <h5>
          {activity.products
            ? `${activity.products.length} Essential Product${
                activity.products.length === 1 ? "" : "s"
              }`
            : "Essential Products Coming Soon!"}
        </h5>

        {activity.products ? (
          <CardColumns>
            {activity.products.map(
              ({ _id, image, description, link, name, creator, tags }) => (
                <Card key={_id}>
                  <Card.Img variant="top" src={image.url} />
                  <Card.Body>
                    <Card.Title>
                      {name} by {creator}
                    </Card.Title>
                    {tags ? <Tags tags={tags} /> : null}
                    <Card.Text>{`${description.substring(
                      0,
                      180,
                    )}...`}</Card.Text>
                    <a
                      href={link}
                      onClick={e =>
                        logEvent(
                          `/activity/${activity.name}`,
                          `product ${name} comission click`,
                        )
                      }
                      className="btn btn-primary">
                      <FontAwesomeIcon icon={faShoppingCart} /> Select Item
                    </a>
                  </Card.Body>
                </Card>
              ),
            )}
          </CardColumns>
        ) : null}
      </div>
    </Layout>
  );
}

ActivityPage.getInitialProps = async ({ query, asPath }) => {
  const activity = await sanity.fetch(getActivityByName(query.name));
  const { image, name, description, seo_hook, seo_line, seo_sinker } = activity;

  const title = `${seo_hook} - ${seo_line}`;
  const description = `${seo_hook}. ${seo_line}. ${seo_sinker}`;

  return {
    activity,
    seo: {
      title,
      description,
      openGraph: {
        url: asPath,
        title: title,
        description,
        images: [
          {
            url: image.url,
          },
        ],
      },
    },
  };
};

export default ActivityPage;
