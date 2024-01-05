import React from "react";
import "../styles/Login.css"
import Navbar from "./Navbar";
import { useTheme } from '../../ThemeContext';

const Login = () => {
    const { currentTheme, light, dark } = useTheme();
    const theme = currentTheme === 'light' ? light : dark;

    return (
        <div className="container-login" style={{ backgroundColor: theme.primaryColor }}>
            <Navbar /> 
            <h1>Welcome to the Login Page</h1>
        </div>
    );
};

export default Login;