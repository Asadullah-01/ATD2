// src/Components/Notification/Notification.jsx

import React from 'react';
import { users } from '../../Constants/data';
import '../Notification/Notification.css';

const Notification = ({ userId }) => {
    const user = users.find(u => u.id === userId);
    const notifications = user.notifications || [];

    return (
        <div className="notification-container">
            <h2>Notifications</h2>
            {notifications.length > 0 ? (
                <ul className="notification-list">
                    {notifications.map((notification) => (
                        <li key={notification.id} className="notification-item">
                            <p>{notification.message}</p>
                            <span className="notification-date">{notification.date}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No notifications available.</p>
            )}
        </div>
    );
};

export default Notification;
