import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.cart.items);

  return (
    <nav style={{ padding: "10px", background: "#2d6a4f", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/plants" style={{ margin: "10px", color: "white" }}>Plants</Link>
      <Link to="/cart" style={{ margin: "10px", color: "white" }}>
        Cart ({cart.length})
      </Link>
    </nav>
  );
}