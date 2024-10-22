import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Ensure your CSS file is linked correctly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For FontAwesome icons
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Eye icons for password visibility

const SignUp = ({ onSignUpSuccess }) => {
    const [employeeId, setEmployeeId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/signup', { employeeId, name, password });
            const { token, msg } = response.data;

            localStorage.setItem('authToken', token);
            onSignUpSuccess(token);
            alert(msg || 'Account created successfully!'); // Show alert on success
        } catch (err) {
            const message = err.response?.data?.msg || `Account created successfully!${name} `;
            alert(message); // Show alert on error
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="logo-container">
                <h1>Become a member of Quantum Harbour Tech</h1>
            </div>
            <div className="login-container">
                <h2>Employee Sign-Up</h2>
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
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="input-field"
                    />
                    <label htmlFor="password">Password:</label>
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'} // Toggle password visibility
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input-field"
                        />
                        <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default SignUp;
