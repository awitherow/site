import React, { useEffect } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";

import Navigation from "../components/Navigation";

import sanity from "../lib/sanity";
import { getAllHobbies } from "../queries/hobbies";

import "./index.scss";

function Home({ hobbies, ...props }) {
  useEffect(() => {});

  console.log(hobbies);

  return (
    <div id="index" className="page">
      <div className="cover" style={{ paddingTop: 64 }}>
        <Navigation />
        <h1>HIVIBE</h1>
        <h2>Evolve to your Highest Vibration</h2>
        <div className="btn-container">
          <Button variant="primary">Explore Hobbies</Button>
          <Button variant="light">Our Story</Button>
        </div>
      </div>

      <div className="intro container">
        <h3>Explore High Vibe Hobbies</h3>
        <p>
          Below is a curated list of Hobbies of a Higher Vibration, information
          about them, their benefits, and some starter pack items.
        </p>
      </div>

      <ul id="hobbies-container" className="container">
        {hobbies.map(
          ({ _id, name, description, image, benefit, products, tags }) => (
            <li className="hobby" key={_id}>
              <div className="header">
                <img src={image.url} />
                <div className="heading--text">
                  <h3>{name}</h3>
                  <ul className="tags">
                    {tags.map(({ _id, tag }) => (
                      <li className="tag" key={_id}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <p>{description}</p>
                  <h4>More About {name}</h4>
                  <ul>
                    {tags.map(({ _id, tag }) => (
                      <li key={_id}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <h4>Starter Kit Options</h4>
              <ul>
                {products.map(
                  ({ _id, name, creator, description, image, link }) => (
                    <li key={_id}>
                      <img src={image.url} />
                      <h5>
                        {name} by {creator}
                      </h5>
                      <p>{description}</p>
                      <a href={link}>Purchase on Amazon</a>
                    </li>
                  ),
                )}
              </ul>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

Home.getInitialProps = async ({ req }) => {
  return {
    hobbies: await sanity.fetch(getAllHobbies),
  };
};

export default Home;
