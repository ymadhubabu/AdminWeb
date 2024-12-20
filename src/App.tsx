import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OTPRequestForm } from './components/auth/OTPRequestForm';  
import { OTPVerificationForm } from "./components/auth/OTPVerificationForm"; 
import { ProductPage } from "./pages/ProductPage"; 
import { HomePage } from "./pages/HomePage";  

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OTPRequestForm />} />
                <Route path="/verify-otp" element={<OTPVerificationForm />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/home" element={<HomePage />} /> 
            </Routes>
        </Router>
    );
};

export default App;
