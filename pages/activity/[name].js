import React, { useState } from "react";
import { withRouter } from "next/router";
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  Card,
  CardColumns,
  Dropdown,
  Alert,
} from "react-bootstrap";

import { titleCase } from "../../src/lib/strings";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Layout, { Divider } from "../../src/components/Layout";
import Activity from "../../src/components/Activity";
import Tags from "../../src/components/Tags";

import useGlobal from "../../src/store";

import sanity from "../../src/lib/sanity";
import { getActivityByName } from "../../src/actions/activities/queries";

import "./index.scss";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info" onClose={() => setShow(false)} dismissible>
        We use affiliate links, meaning that hivib.es receives a commission on
        the products below — thanks so much for supporting us!
      </Alert>
    );
  }
  return null;
}

function ActivityPage({ activity, seo }) {
  return (
    <Layout id="activity" seo={seo}>
      {activity && <Activity key={activity._id} data={activity} expanded />}
      {activity && (
        <div className="products">
          <h3>Essential Items</h3>
          <Divider />
          <h4>Filter items by...</h4>
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
          </ButtonToolbar>

          <h5>
            {activity.products.length
              ? `${activity.products.length} Essential Items`
              : "Essential Items Coming Soon!"}
          </h5>

          <AlertDismissible />

          {activity.products.length ? (
            <CardColumns>
              {activity.products.map(
                ({ _id, image, description, link, name, creator, tags }) => (
                  <Card key={_id}>
                    <Card.Img variant="top" src={image.url} />
                    <Card.Body>
                      <Card.Title>
                        {name} by {creator}
                      </Card.Title>
                      {tags.length ? <Tags tags={tags} /> : null}
                      <Card.Text>{`${description.substring(
                        0,
                        180,
                      )}...`}</Card.Text>
                      <a href={link} className="btn btn-primary">
                        <FontAwesomeIcon icon={faShoppingCart} /> Select Item
                      </a>
                    </Card.Body>
                  </Card>
                ),
              )}
            </CardColumns>
          ) : null}
        </div>
      )}
    </Layout>
  );
}

ActivityPage.getInitialProps = async ({ query }) => {
  return {
    activity: await sanity.fetch(getActivityByName(query.name)),
    seo: {
      title: `The Best of ${titleCase(
        query.name,
      )} | Understand the Essence of ${titleCase(
        query.name,
      )} and Essential Items!`,
      description: ``,
    },
  };
};

export default ActivityPage;