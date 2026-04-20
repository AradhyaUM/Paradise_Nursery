import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
      <img src={item.image} width="80" />
      <div>
        <h3>{item.name}</h3>
        <p>${item.price} each</p>
        <p>Total: ${item.price * item.quantity}</p>
      </div>

      <div>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <button onClick={() => dispatch(removeFromCart(item.id))}>
          Delete
        </button>
      </div>
    </div>
  );
}