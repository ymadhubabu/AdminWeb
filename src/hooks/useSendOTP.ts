import { useState } from "react";
import axios from "axios";

interface OTPResponse {
    success: boolean;
    message: string;
}

export const useSendOTP = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<OTPResponse | null>(null);

    const sendOTP = async (otpRequest: { country_code: string; mobile_number: string; reg_platform: string; user_type: string }) => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.post("http://172.105.33.153:8080/api/v1/auth/request-otp", otpRequest); 
            setResponse(res.data); 
        } catch (err) {
            setError("Failed to send OTP"); 
        } finally {
            setLoading(false); 
        }
    };

    return { sendOTP, loading, error, response };
}
