import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const claimCoupon = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/claim`, 
        {}, 
        { withCredentials: true }
      );
      setMessage(res.data.message);
    } catch (error) {
    setMessage("Error claiming coupon.");
  }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🎟 Coupon Distribution System</h1>
      <button onClick={claimCoupon} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Claim Coupon
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
