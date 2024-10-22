import React, { useState } from 'react';
import axios from 'axios';
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/login', { employeeId, password });
            const { token } = response.data;

            // Store token in local storage
            localStorage.setItem('authToken', token);

            // Show alert for successful login
            alert(`Welcome, ${employeeId}! You have successfully logged in.`);

            onLogin(employeeId, password);

            if (employeeId === 'admin1') {
                localStorage.setItem('userRole', 'admin'); // Store admin role in local storage
                navigate('/admin-dashboard'); // Redirect to admin dashboard
            } else {
                localStorage.setItem('userRole', 'user'); // Store regular user role
                navigate('/attendance'); // Redirect to attendance page
            }

        } catch (err) {
            const message = err.response?.data?.msg || 'Invalid login credentials';
            setError(message);
        }
    };

    return (
        <>
            <div className="logo-container">
                <h1>Welcome to Quantum Harbour Tech</h1>
            </div>

            <div className="login-container">
                <h2>Employee Login</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit} className="login-form">
                    <label htmlFor="employeeId">Employee ID:</label>
                    <input
                        type="text"
                        id="employeeId"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        required
                        className="input-field"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </>
    );
};

export default Login;
