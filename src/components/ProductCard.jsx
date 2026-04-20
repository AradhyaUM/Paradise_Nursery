import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const inCart = cart.find(item => item.id === plant.id);

  return (
    <div className="card">
      <img src={plant.image} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>${plant.price}</p>

      <button
        disabled={!!inCart}
        onClick={() => dispatch(addToCart(plant))}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}