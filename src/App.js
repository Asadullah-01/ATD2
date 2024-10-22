// src/App.js
import './App.css';
import {Router, Routes, Route, Navbar} from './Constants/import';
import { Login, Signup, Attendance, AdminDashboard, TimeLock, UserProfile, Settings, Notification } from "./Constants/import";
import { useState } from 'react';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (employeeId) => {
        setIsLoggedIn(true);
        // You might want to set the employeeId in localStorage or state here
        localStorage.setItem('employeeId', employeeId);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRole');
        localStorage.removeItem('employeeId'); // Clear the employeeId
        setIsLoggedIn(false);
        // Optionally navigate to the login page after logging out
        window.location.href = '/'; // Redirect to login page
    };

    return (
        <>
            <Router>
                <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<Login onLogin={handleLogin} />} />  {/* Login page */}
                    <Route path="/signup" element={<Signup />} />  {/* SignUp page */}
                    <Route path="/attendance" element={<Attendance />} />  {/* Attendance page */}
                    <Route path="/admin" element={<AdminDashboard />} />  {/* Admin Dashboard */}
                    <Route path="/profile" element={<UserProfile />} />  {/* User Profile page */}
                    <Route path="/settings" element={<Settings />} />  {/* Settings page */}
                    <Route path="*" element={<TimeLock />} />  {/* 404 or Time lock page */}
                    <Route path="/notification" element={<Notification userId="EMP001"/>} />

                </Routes>
            </Router>
        </>
    );
}

export default App;
