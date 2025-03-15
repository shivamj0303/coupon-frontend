import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClaimCoupon = () => {
    const [loading, setLoading] = useState(false);

    const claimCoupon = async () => {
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/claim", {}, { withCredentials: true });
            toast.success(res.data.message);
        } catch (err) {
            toast.error(err.response?.data?.message || "Error claiming coupon");
        }
        setLoading(false);
    };

    return (
        <div>
            <h2>🎟 Claim Your Coupon</h2>
            <button onClick={claimCoupon} disabled={loading}>
                {loading ? "Processing..." : "Claim Coupon"}
            </button>
        </div>
    );
};

export default ClaimCoupon;
