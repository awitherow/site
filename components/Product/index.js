import React from "react";

function Product({ _id, name, creator, description, image, link }) {
  return (
    <li key={_id}>
      <img src={image.url} />
      <h5>
        {name} by {creator}
      </h5>
      <p>{description}</p>
      <a href={link}>Purchase on Amazon</a>
    </li>
  );
}
