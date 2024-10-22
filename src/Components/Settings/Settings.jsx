// src/Components/Settings/Settings.jsx

import React, { useState } from 'react';
import '../Settings/Settings.css'; // Import CSS for styling

const Settings = () => {
    const [password, setPassword] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [profileVisibility, setProfileVisibility] = useState('public');

    const handleSave = () => {
        // Logic to save settings (to be connected to backend later)
        console.log('Settings saved:', { password, notificationsEnabled, profileVisibility });
        alert('Settings updated successfully!');
    };

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <div className="settings-box">
                <div className="settings-item">
                    <label>Change Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="settings-item">
                    <label>Enable Notifications:</label>
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                    />
                </div>
                <div className="settings-item">
                    <label>Profile Visibility:</label>
                    <select
                        value={profileVisibility}
                        onChange={(e) => setProfileVisibility(e.target.value)}
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <button onClick={handleSave}>Save Changes</button>
            </div>
        </div>
    );
};

export default Settings;
