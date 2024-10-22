// src/Components/UserProfile/UserProfile.js

import React, { useState } from 'react';
import { users } from '../../Constants/data'; // Import users data
import '../UserProfile/UserProfile.css'; // Import CSS for styling

const UserProfile = ({ userId }) => {
    // Get logged-in user details
    const user = users.find(u => u.id === userId);

    // Define state variables
    const [name, setName] = useState(user ? user.name : ''); // Default to an empty string if user not found
    const [profilePic, setProfilePic] = useState(user ? user.profilePic : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [theme, setTheme] = useState(user ? user.settings.theme : 'light');

    const handleSave = () => {
        // Logic to save changes (you'll replace this with a backend call later)
        console.log('Changes saved:', { name, profilePic, email, theme });
        alert('Profile updated successfully!');
    };

    // Handle case where user is not found
    if (!user) {
        return <div className="error-message">User not found. Please log in again.</div>;
    }

    return (
        <div className="user-profile-container">
            <h1>User Profile</h1>
            <div className="profile-details">
                <img src={profilePic} alt={name} className="profile-pic" />
                <div className="profile-info">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Profile Picture URL:</label>
                    <input
                        type="text"
                        value={profilePic}
                        onChange={(e) => setProfilePic(e.target.value)}
                    />
                    <label>Theme:</label>
                    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                    <button onClick={handleSave}>Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
