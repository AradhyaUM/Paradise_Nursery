import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Paradise Nursery</h1>
      <p>Welcome to our plant store</p>
      <Link to="/plants">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}