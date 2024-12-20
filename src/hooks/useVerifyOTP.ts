import { useState } from "react";
import axios from "axios";

interface OTPVerificationResponse {
    success: boolean;
    message: string;
}

export const useVerifyOTP = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<OTPVerificationResponse | null>(null);

    const verifyOTP = async (otpVerificationRequest: { country_code: string; mobile_number: string; otp: string }) => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.post("http://172.105.33.153:8080/api/v1/auth/verify-otp", otpVerificationRequest);
            setResponse(res.data);
        } catch (err) {
            setError("Failed to verify OTP");
        } finally {
            setLoading(false);
        }
    };

    return { verifyOTP, loading, error, response };
};
