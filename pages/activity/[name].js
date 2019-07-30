import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardColumns } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Layout, { Divider } from "../../src/components/Layout";
import Activity from "../../src/components/Activity";

import sanity from "../../src/lib/sanity";

import useGlobal from "../../src/store";

import "./index.scss";

const ActivityPage = () => {
  const [globalState, globalActions] = useGlobal();
  const router = useRouter();

  // TODO: no router.query.name ??

  useEffect(() => {
    async function getActivityData() {
      await globalActions.activities.getActivity(router.query.name);
    }

    getActivityData();
  }, []);

  return (
    <Layout id="activity">
      {globalState.activity._id ? (
        <Activity
          key={globalState.activity._id}
          data={globalState.activity}
          expanded
        />
      ) : null}
      {globalState.activity.products ? (
        <div className="products">
          <h3>Products</h3>
          <Divider />
          <CardColumns>
            {globalState.activity.products.map(
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
      ) : null}
    </Layout>
  );
};

export default ActivityPage;
