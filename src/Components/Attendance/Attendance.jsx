import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Attendance/Attendance.css'; // Import CSS for styling
import CustomToast from '../Toast/Toast'; // Custom Toast for success/error notifications
import { AttendanceHistory } from '../../Constants/import'; // Assuming you're importing AttendanceHistory correctly

const Attendance = () => {
    const [users, setUsers] = useState([]); // State for users fetched from backend
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isAllowed, setIsAllowed] = useState(false);
    const [loading, setLoading] = useState(true); // Initially loading is true
    const [disableButton, setDisableButton] = useState(false); // Button disable state
    const [markedUsers, setMarkedUsers] = useState([]); // Track users who have marked attendance
    const [toastVisible, setToastVisible] = useState(false); // Toast visibility state
    const [toastType, setToastType] = useState(''); // Toast type (success or error)
    const [userId, setUserId] = useState(null); // Track current user's ID

    // Fetch users and check attendance time
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const userIdFromStorage = localStorage.getItem('userId'); // Assuming userId is stored in localStorage
                setUserId(userIdFromStorage); // Set userId from localStorage

                const response = await axios.get('http://localhost:5000/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUsers(response.data);
                setLoading(false); // Data fetched, stop loading
            } catch (err) {
                console.error('Error fetching user data:', err);
                setError('Error fetching user data');
                setLoading(false); // Stop loading even if there's an error
            }
        };

        const checkTimeAccess = () => {
            const currentTime = new Date();
            const startTime = new Date();
            startTime.setHours(10, 0);
            const endTime = new Date();
            endTime.setHours(22, 30); // Correct time limit for attendance

            if (currentTime >= startTime && currentTime <= endTime) {
                setIsAllowed(true);
            } else {
                setError('Attendance is only allowed between 10:00 AM and 10:30 AM');
                showToast('error', 'Attendance is only allowed between 10:00 AM and 10:30 AM');
            }
        };

        checkTimeAccess();
        fetchData(); // Fetch users after checking time access
    }, []);

    const showToast = (type, msg) => {
        setToastType(type);
        setMessage(msg);
        setToastVisible(true);
        setTimeout(() => {
            setToastVisible(false);
        }, 3000); // Hide toast after 3 seconds
    };

    const handleMarkAttendance = async (employeeId, userName) => {
        if (markedUsers.includes(employeeId)) {
            showToast('error', 'You have already marked attendance');
            return;
        }

        if (!isAllowed) return;

        const confirmMark = window.confirm("Are you sure you want to mark attendance?");
        if (!confirmMark) return;

        try {
            setDisableButton(true);
            const token = localStorage.getItem('authToken');
            await axios.post('http://localhost:5000/mark-attendance', {
                userId: employeeId,
                name: userName, // Send user's name in the request
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            showToast('success', 'Attendance marked successfully!');
            setMarkedUsers((prevMarkedUsers) => [...prevMarkedUsers, employeeId]);
        } catch (err) {
            console.error('Error marking attendance:', err);
            showToast('error', 'Error marking attendance');
        } finally {
            setDisableButton(false);
        }
    };

    return (
        <div className="attendance-container">
            <h1>Attendance</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="error-message">{error}</p>
            ) : (
                <ul className="attendance-list">
                    {users.map(user => (
                        <li key={user._id}>
                            <div className="user-attendance-card">
                                <span className="user-name">{user.name}</span>
                                <button
                                    className="mark-attendance-button"
                                    onClick={() => handleMarkAttendance(user.employeeId, user.name)} // Pass name
                                    disabled={disableButton || markedUsers.includes(user.employeeId)}>
                                    {markedUsers.includes(user.employeeId) ? 'Already Marked' : 'Mark Attendance'}
                                </button>

                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {/* Custom Toast Notification */}
            {toastVisible && <CustomToast type={toastType} message={message}/>}

            <div>

               <AttendanceHistory userId={userId}/>
            </div>
        </div>
    );
};

export default Attendance;
