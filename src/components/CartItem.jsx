import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: -1 }));
  };

  const handleDelete = (name) => {
    dispatch(removeItem(name));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <h3>Your cart is empty</h3>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.name}
                style={{
                  border: "1px solid #ccc",
                  margin: "10px 0",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px"
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />

                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Total: ₹{item.price * item.quantity}</p>

                  <div>
                    <button onClick={() => handleIncrement(item)}>+</button>
                    <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                    <button onClick={() => handleDecrement(item)}>-</button>
                  </div>
                </div>

                <button onClick={() => handleDelete(item.name)}>
                  Delete
                </button>
              </div>
            ))}

            <h2>Total Cart Amount: ₹{totalAmount}</h2>

            <button onClick={() => alert("Coming Soon")}>
              Checkout
            </button>

            <br /><br />

            <Link to="/plants">
              <button>Continue Shopping</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}