import React, { useEffect } from "react";

import sanity from "../lib/sanity";
import { getAllHobbies } from "../queries/hobbies";

function App({ hobbies }) {
  console.log(hobbies);
  useEffect(() => {});
  return (
    <div>
      <nav>
        <div className="title">
          <h1>Hi Vibe Life</h1>
          <h2>Evolve to your Highest Vibration</h2>
        </div>
        <ul>
          <li>Example link...</li>
        </ul>
      </nav>
      <div className="intro">
        <h3>Explore High Vibe Hobbies</h3>
        <p>
          Below is a curated list of Hobbies of a Higher Vibration, information
          about them, their benefits, and some starter pack items.
        </p>
      </div>
      <ul id="hobbies-container">
        {hobbies.map(({ _id, name, description, image, products, tags }) => (
          <li key={_id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={image.url} />
            <ul>
              {tags.map(({ _id, tag }) => (
                <li key={_id}>{tag}</li>
              ))}
            </ul>
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
        ))}
      </ul>
    </div>
  );
}

App.getInitialProps = async ({ req }) => {
  return {
    hobbies: await sanity.fetch(getAllHobbies),
  };
};

export default App;
