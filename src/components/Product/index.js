import React from "react";

function Product({ data }) {
  const { _id, name, creator, description, link } = data;
  return (
    <div key={_id}>
      <h5>
        {name} by {creator}
      </h5>
      <p>{description}</p>
      <a href={link}>Purchase on Amazon</a>
    </div>
  );
}

export default Product;
