import React from "react";
import Product from "../Product";
import { CardColumns } from "react-bootstrap";

export default function ProuductList({ products, onClick }) {
  return (
    <div className="container">
      <div className="filter"></div>
      <CardColumns>
        {products.map(product => (
          <Product key={product._id} {...product} onClick={onClick} />
        ))}
      </CardColumns>
    </div>
  );
}
