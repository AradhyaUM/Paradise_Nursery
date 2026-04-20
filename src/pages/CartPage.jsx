import Header from "../components/Header";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartPage() {
  const items = useSelector(state => state.cart.items);

  const total = items.reduce((a, i) => a + i.price * i.quantity, 0);

  return (
    <div>
      <Header />
      <h2>Shopping Cart</h2>

      {items.map(i => (
        <CartItem key={i.id} item={i} />
      ))}

      <h3>Total: ${total}</h3>

      <Link to="/plants">Continue Shopping</Link>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
}