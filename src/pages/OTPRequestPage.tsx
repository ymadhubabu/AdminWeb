import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPRequestPage: React.FC = () => {
    const [mobileNumber, setMobileNumber] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("+91");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleRequestOTP = async () => {
        if (!mobileNumber) {
            setError("Mobile number is required");
            return;
        }


        try {
            setLoading(true);

            const response = { success: true, message: "OTP sent successfully" };

            if (response.success) {
                navigate("/verify-otp", { state: { mobileNumber: parseInt(mobileNumber), countryCode } });
            } else {
                setError("Failed to request OTP");
            }
        } catch (error: any) {
            setError("An error occurred while requesting OTP");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>SignUp/SignIn</h2>
            <div>
                <label>Mobile Number</label>
                <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                />
            </div>
            <div>
                <label>Country Code</label>
                <input
                    type="text"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                />
            </div>
            <button onClick={handleRequestOTP} disabled={loading}>
                {loading ? "Sending OTP..." : "Request OTP"}
            </button>

            {error && <p>{error}</p>}
        </div>
    );
};

export default OTPRequestPage;
