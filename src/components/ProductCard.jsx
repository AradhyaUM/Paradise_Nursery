import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={product.image} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
}