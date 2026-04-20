import Header from "../components/Header";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div>
      <Header />
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, i) => (
          <CartItem key={i} item={item} index={i} />
        ))
      )}
    </div>
  );
}