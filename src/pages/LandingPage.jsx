import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const nav = useNavigate();

  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>Buy beautiful plants for your home 🌿</p>
      <button onClick={() => nav("/plants")}>Get Started</button>
    </div>
  );
}