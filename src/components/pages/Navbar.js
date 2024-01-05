import React from "react";
import "../styles/Navbar.css"
import { Link } from "react-router-dom";
import { useTheme } from '../../ThemeContext';

const Navbar = () => {
    const { currentTheme, toggleTheme, light, dark } = useTheme();
    const theme = currentTheme === 'light' ? light : dark;

    const toggleThemeHandler = () => {
        toggleTheme(); // Toggle the theme
    };

    return (
        <nav style={{ backgroundColor: theme.primaryColor }}>
            <div className="navbar-content">
                <div className="navbar-left">
                    <h3>Threads</h3>
                </div>
                <div className="navbar-right">
                    <span className="material-icons">account_circle</span>
                    <span className="material-icons">exit_to_app</span>
                    <span className="material-icons" onClick={toggleThemeHandler}>brightness_4</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;