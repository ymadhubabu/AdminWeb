import React, { useState } from "react";
import { useSendOTP } from "../../hooks/useSendOTP";
import { OTPRequest } from "../../types/OTPRequest";
import { useNavigate } from "react-router-dom";

export const OTPRequestForm: React.FC = () => {
    const [countryCode, setCountryCode] = useState<string>("+91");
    const [mobileNumber, setMobileNumber] = useState<string>(""); 
    const [regPlatform, setRegPlatform] = useState<string>("android");
    const [userType, setUserType] = useState<string>("vendor");  

    const { sendOTP, loading, error, response } = useSendOTP(); 
    const navigate = useNavigate();

    const mapUserType = (type: string) => {
        switch (type.toLowerCase()) {
            case "vendor":
                return "VENDOR";  
            case "vendor_staff":
                return "VENDOR_STAFF";
            case "customer_care":
                return "CUSTOMER_CARE";
            case "user":
                return "USER";
            case "admin":
                return "ADMIN";
            default:
                return "USER";  
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const otpRequest: OTPRequest = {
            country_code: countryCode,
            mobile_number: mobileNumber,
            reg_platform: regPlatform,
            user_type: mapUserType(userType),  
        };

        sendOTP(otpRequest);

        if (!loading && !error && response?.success) {
            navigate("/verify-otp", {
                state: { mobileNumber: mobileNumber, countryCode: countryCode }, 
            });
        }
    };

    return (
        <div>
            <h2>Request OTP</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Country Code</label>
                    <input
                        type="text"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                    />
                </div>
                <div>
                    <label>Mobile Number</label>
                    <input
                        type="text" 
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label>Registration Platform</label>
                    <input
                        type="text"
                        value={regPlatform}
                        onChange={(e) => setRegPlatform(e.target.value)}
                    />
                </div>
                <div>
                    <label>User Type</label>
                    <input
                        type="text"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Sending OTP..." : "Send OTP"}
                </button>
            </form>

            {error && <p>Error: {error}</p>}
            {response && <p>OTP sent successfully! Message: {response.message}</p>}
        </div>
    );
};
