import React from 'react';
import '../../Components/Navbar/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, onLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Attendance System</h1>
            </div>
            <ul className="navbar-links">
                {isLoggedIn ? (
                    <>
                        <li>
                            <Link to="#" onClick={onLogout}>Logout</Link>
                        </li>
                        <li>
                            <Link to="/attendance">Attendance</Link>
                        </li>
                        <li>
                            <Link to="/profile">User Profile</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </>
                )}
                {localStorage.getItem('userRole') === 'admin' && (
                    <li>
                        <Link to="/admin-dashboard">Admin Dashboard</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
