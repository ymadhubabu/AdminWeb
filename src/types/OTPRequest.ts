export interface OTPRequest {
    country_code: string;
    mobile_number: string; 
    reg_platform: string;
    user_type: string;
}

export interface OTPVerificationRequest {
    country_code: string;
    mobile_number: string; 
    otp: string;
}

export interface OTPResponse {
    success: boolean;
    message: string;
}
