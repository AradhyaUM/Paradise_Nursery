import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 15,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb"
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 12,
      image: "https://images.unsplash.com/photo-1598887142487-7c7a6a8d7c5b"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              textAlign: "center"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;