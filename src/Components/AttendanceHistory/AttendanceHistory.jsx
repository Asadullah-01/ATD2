import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AttendanceHistory = ({ userId }) => {
    const [attendanceHistory, setAttendanceHistory] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // Define an async function to fetch attendance history
        const fetchAttendanceHistory = async () => {
            try {
                console.log("User ID:", userId);

                // Make API request to fetch attendance history for the given employeeId
                const response = await axios.get(`http://localhost:5000/attendances/${userId}`);

                // Log the entire response object
                console.log("API Response:", response);

                // Check if the response contains data
                console.log("Attendance Records:", response.data.records);

                // Update state with fetched attendance records
                setAttendanceHistory(response.data.records);
            } catch (error) {
                console.error("Error fetching attendance history", error);
                setError("Could not fetch attendance history");
            }
        };

        // Only fetch data if userId is provided
        if (userId) {
            fetchAttendanceHistory();
        }
    }, [userId]);  // This ensures the function runs only when userId changes

    return (
        <div>
            <h1>Attendance History</h1>
            <h2>Attendance History for this Month</h2>
            {error && <p className="error-message">{error}</p>}
            <ul>
                {attendanceHistory.length > 0 ? (
                    attendanceHistory.map((record) => (
                        <li key={record._id}>
                            <strong>{record.name}</strong>: {new Date(record.date).toLocaleDateString()}
                        </li>
                    ))
                ) : (
                    <p>No attendance marked this month.</p>
                )}
            </ul>
        </div>
    );
};

export default AttendanceHistory;
