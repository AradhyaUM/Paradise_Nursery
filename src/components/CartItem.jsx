import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";

export default function CartItem({ item, index }) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{item.name} - ₹{item.price}</p>
      <button onClick={() => dispatch(removeFromCart(index))}>
        Remove
      </button>
    </div>
  );
}