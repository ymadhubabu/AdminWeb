import React, { useState } from 'react';
import { Avatar, Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { data, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, API_VERSION } from '../../constants';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";


const OTPLogin: React.FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {

    let data = {
        "reg_platform": "Android",
        "country_code": "+91",
        "mobile_number":phone
      }

    try { 
        const response = await axios.post( API_BASE_URL + API_VERSION + 'auth/request-otp', data);
        if (response.data.success) { 
            // OTP verification successful, navigate to home page 
            setIsOtpSent(true);
            alert('OTP sent to ' + phone);
            //navigate('/home'); 
        } else { 
            alert('Invalid OTP'); 
        } 
    } catch (error) { 
        if (axios.isAxiosError(error)) { 
            alert('Error verifying OTP: ' + error.message); 
        } else if (error instanceof Error) { 
            alert('Error verifying OTP: ' + error.message); 
        } else { 
            alert('An unexpected error occurred');
        }
    }
    
    // Simulate OTP sending
    
  };

  const handleVerifyOtp = async () => {
    // Simulate OTP verification
    // if (otp === '123456') {
    //   navigate('/home');
    // } else if (otp === '234567') {
    //     navigate('/about');
    //   }else {
    //   alert('Invalid OTP');
    // }

    let data = {
        "country_code": "+91",
        "mobile_number": phone,
        "otp": "9090"
    }

    try { 
        const response = await axios.post( API_BASE_URL + API_VERSION + 'auth/verify-otp', data);
        if (response.data.success) { 
            // OTP verification successful, navigate to home page 
            navigate('/home'); 
        } else { 
            alert('Invalid OTP'); 
        } 
    } catch (error) { 
        if (axios.isAxiosError(error)) { 
            alert('Error verifying OTP: ' + error.message); 
        } else if (error instanceof Error) { 
            alert('Error verifying OTP: ' + error.message); 
        } else { 
            alert('An unexpected error occurred');
        }
    }

  };

  return (
    <Container maxWidth="sm">
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
            mb: 1,
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Sign In
        </Typography>
      <Box mt={5}>
        
        {!isOtpSent ? (
          <>
            <TextField
              fullWidth
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              margin="normal"
            />
            
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }} onClick={handleSendOtp}>
              Send OTP
            </Button>
          </>
        ) : (
          <>
            <TextField
              fullWidth
              label="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleVerifyOtp}>
              Verify OTP
            </Button>
          </>
        )}
      </Box>
      </Paper>
    </Container>
  );
};

export default OTPLogin;
