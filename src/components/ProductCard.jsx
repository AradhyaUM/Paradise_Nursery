import React from "react";

export default function ProductCard({ name, description, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />

      <h3>{name}</h3>
      <p>{description}</p>

      <h4>${price}</h4>

      <button>Add to Cart</button>
    </div>
  );
}