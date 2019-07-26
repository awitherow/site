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
    </div>
  );
}

App.getInitialProps = async ({ req }) => {
  return {
    hobbies: await sanity.fetch(getAllHobbies),
  };
};

export default App;
