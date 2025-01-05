// src/types/User.ts
export type User = {
    timestamp: string;
    success: boolean;
    status: number;
    data: {
      message: string | null;
      address: string | null;
      roles: string[];
      user_id: number;
      access_token: string;
      name: string | null;
      mobile_verified: boolean;
      refresh_token: string;
      referred_vendor_id: number;
    };
  } | null;
  