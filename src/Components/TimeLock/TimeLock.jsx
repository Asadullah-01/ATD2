import React, { useEffect, useState } from 'react';
import "../TimeLock/TimeLock.css";
import { clockt } from "../../Constants/import";
import { useNavigate } from 'react-router-dom'; // For redirecting

const TimeLock = () => {
    const [isTimeAllowed, setIsTimeAllowed] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false); // State for admin bypass
    const navigate = useNavigate();

    // Function to check if the current time is within the allowed window
    const checkTimeLock = () => {
        const currentTime = new Date();
        const startTime = new Date();
        const endTime = new Date();

        // Set start time to 10:00 AM
        startTime.setHours(10, 0, 0);
        // Set end time to 10:30 AM
        endTime.setHours(10, 30, 0);

        // Check if current time is within the allowed range
        if (currentTime >= startTime && currentTime <= endTime) {
            setIsTimeAllowed(true);
        } else {
            setIsTimeAllowed(false);
        }
    };

    // Admin bypass logic
    const handleAdminBypass = () => {
        setIsAdmin(true); // Admin bypass triggered
        navigate("/login"); // Redirect to login page for admin
    };

    useEffect(() => {
        // Check the time when the component mounts
        checkTimeLock();
    }, []);

    useEffect(() => {
        // If the time is allowed, redirect to attendance page
        if (isTimeAllowed && !isAdmin) {
            navigate("/attendance"); // Redirect to attendance submission page
        }
    }, [isTimeAllowed, isAdmin, navigate]);

    return (
        <div className="time-lock-container">
            <h1 className="time-lock-title">Time Lock</h1>
            {!isTimeAllowed && !isAdmin ? (
                <>
                    <p className="time-lock-message">
                        Attendance can only be marked between <strong>10:00 AM</strong> and <strong>10:30 AM</strong>.
                    </p>
                    <p className="time-lock-info">
                        Please try again during the designated time.
                    </p>
                    <a href="/" className="back-home">Back to Home</a>

                    {/* Admin bypass section */}
                    <div className="admin-bypass">
                        <p>Are you the admin?</p>
                        <button className="admin-bypass-button" onClick={handleAdminBypass}>
                            Yes, I'm the Admin
                        </button>
                    </div>

                    <div className="time-lock-image">
                        <img src={clockt} alt="Time Lock" />
                    </div>
                </>
            ) : (
                <p className="time-lock-message">Redirecting...</p>
            )}
        </div>
    );
};

export default TimeLock;
