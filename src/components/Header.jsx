import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.cart.items);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ padding: "20px", background: "#2e7d32", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>Paradise Nursery</h1>

      <nav style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/plants" style={{ color: "white" }}>Plants</Link>
        <Link to="/about" style={{ color: "white" }}>About</Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}