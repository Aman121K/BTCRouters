// src/loginPage.js
import React, { useState } from "react";
import { useAuth } from './AuthContext'; // Import useAuth context
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginPage.css'; // Import CSS for styling

const LoginPage = () => {
    const { login } = useAuth(); // Get the login function from context
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "rohit" && password === "admin@123") {
            login(); 
            navigate("/choose"); // Navigate to the Choose route after login
        } else {
            setError("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;