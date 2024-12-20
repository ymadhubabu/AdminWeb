import React, { useState } from "react";
import { useVerifyOTP } from "../../hooks/useVerifyOTP";
import { OTPVerificationRequest } from "../../types/OTPRequest";
import { useNavigate, useLocation } from "react-router-dom";

export const OTPVerificationForm: React.FC = () => {
    const [otp, setOtp] = useState<string>("");

    const { state } = useLocation();
    const { mobileNumber, countryCode } = state || {}; 

    const { verifyOTP, loading, error, response } = useVerifyOTP(); 
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const otpVerificationRequest: OTPVerificationRequest = {
            country_code: countryCode,
            mobile_number: mobileNumber, 
            otp: otp,
        };

       
        verifyOTP(otpVerificationRequest);

        if (!loading && !error && response?.success) {
            navigate("/home");
        }
    };

    return (
        <div>
            <h2>Verify OTP</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter OTP</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Verifying OTP..." : "Verify OTP"}
                </button>
            </form>

            {error && <p>Error: {error}</p>}
            {response && <p>{response.message}</p>}
        </div>
    );
};
