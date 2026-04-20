import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const total = useSelector(state =>
    state.cart.items.reduce((a, i) => a + i.quantity, 0)
  );

  return (
    <nav className="header">
      <h2>Paradise Nursery</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({total})</Link>
      </div>
    </nav>
  );
} 