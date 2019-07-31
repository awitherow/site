import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  Card,
  CardColumns,
  Dropdown,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Layout, { Divider } from "../../src/components/Layout";
import Activity from "../../src/components/Activity";

import sanity from "../../src/lib/sanity";
import { getActivityByName } from "../../src/actions/activities/queries";

import "./index.scss";

const ActivityPage = ({ activity }) => {
  return (
    <Layout id="activity">
      {activity._id && <Activity key={activity._id} data={activity} expanded />}
      {activity._id && (
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
            {activity.products
              ? `${activity.products.length} Results`
              : "Essential Items Coming Soon!"}
          </h5>
          <CardColumns>
            {activity.products &&
              activity.products.map(
                ({ _id, image, description, link, name, creator, tags }) => (
                  <Card key={_id}>
                    <Card.Img variant="top" src={image.url} />
                    <Card.Body>
                      <Card.Title>
                        {name} by {creator}
                      </Card.Title>
                      {tags && (
                        <div className="tags">
                          {tags.map(({ tag }, i) => (
                            <div key={i} className="tag">
                              {tag}
                            </div>
                          ))}
                        </div>
                      )}
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
        </div>
      )}
    </Layout>
  );
};

ActivityPage.getInitialProps = async function({ query }) {
  return {
    activity: await sanity.fetch(getActivityByName(query.name)),
  };
};

export default ActivityPage;
