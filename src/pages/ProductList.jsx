import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Header from "../components/Header";

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const products = {
    Aromatic: [
      { name: "Lavender", price: 10, image: "/images/lavender.png" },
      { name: "Mint", price: 8, image: "/images/mint.png" },
      { name: "Rosemary", price: 9, image: "/images/rosemary.png" },
      { name: "Basil", price: 7, image: "/images/basil.png" },
      { name: "Thyme", price: 6, image: "/images/thyme.png" },
      { name: "Sage", price: 11, image: "/images/sage.png" }
    ],
    Medicinal: [
      { name: "Aloe Vera", price: 12, image: "/images/aloe.png" },
      { name: "Tulsi", price: 10, image: "/images/tulsi.png" },
      { name: "Neem", price: 14, image: "/images/neem.png" },
      { name: "Ashwagandha", price: 15, image: "/images/ashwagandha.png" },
      { name: "Giloy", price: 13, image: "/images/giloy.png" },
      { name: "Brahmi", price: 9, image: "/images/brahmi.png" }
    ],
    Succulents: [
      { name: "Cactus", price: 8, image: "/images/cactus.png" },
      { name: "Succulent", price: 18, image: "/images/succulent.png" },
      { name: "Echeveria", price: 16, image: "/images/echeveria.png" },
      { name: "Haworthia", price: 14, image: "/images/haworthia.png" },
      { name: "Sedum", price: 12, image: "/images/sedum.png" },
      { name: "Crassula", price: 11, image: "/images/crassula.png" }
    ]
  };

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <Header />

      <div style={{ padding: "20px" }}>
        {Object.keys(products).map((category) => (
          <div key={category}>
            <h2>{category} Plants</h2>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {products[category].map((plant) => {
                const isAdded = cart.some(
                  (item) => item.name === plant.name
                );

                return (
                  <div
                    key={plant.name}
                    style={{
                      border: "1px solid #ccc",
                      padding: "10px",
                      width: "200px",
                      textAlign: "center"
                    }}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover"
                      }}
                    />

                    <h3>{plant.name}</h3>
                    <p>₹{plant.price}</p>

                    <button
                      onClick={() => handleAdd(plant)}
                      disabled={isAdded}
                    >
                      {isAdded ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}