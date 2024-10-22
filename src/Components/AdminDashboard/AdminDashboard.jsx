import React, { useState, useEffect } from 'react';
import '../AdminDashboard/AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
    // State placeholders for dashboard data
    const [totalUsers, setTotalUsers] = useState(0);
    const [attendanceToday, setAttendanceToday] = useState(0);
    const [averageAttendance, setAverageAttendance] = useState(0);
    const [userList, setUserList] = useState([]);

    // Simulate fetching data from backend
    useEffect(() => {
        // These values will come from the backend later on.
        setTotalUsers(120);
        setAttendanceToday(80); // 80% attendance today
        setAverageAttendance(75); // 75% average attendance
        setUserList([
            { id: 1, name: "John Doe", attendance: "Present" },
            { id: 2, name: "Jane Smith", attendance: "Absent" }
            // More user data will come from the backend
        ]);
    }, []);

    // Event handlers (will be expanded with backend calls)
    const handleAddUser = () => {
        console.log("Add New User clicked!");
        // Later: Logic to add a new user via backend
    };

    const handleViewReports = () => {
        console.log("View Attendance Reports clicked!");
        // Later: Logic to fetch and view attendance reports
    };

    const handleSettings = () => {
        console.log("Settings clicked!");
        // Later: Logic to adjust settings
    };

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
            </header>

            <section className="admin-stats">
                <div className="stat-card">
                    <h2>Total Users</h2>
                    <p>{totalUsers}</p>
                </div>
                <div className="stat-card">
                    <h2>Attendance Today</h2>
                    <p>{attendanceToday}%</p>
                </div>
                <div className="stat-card">
                    <h2>Average Attendance</h2>
                    <p>{averageAttendance}%</p>
                </div>
            </section>

            <section className="user-management">
                <h2>User Management</h2>
                <button className="add-user-button" onClick={handleAddUser}>Add New User</button>
                <div className="user-list">
                    {userList.length > 0 ? (
                        <ul>
                            {userList.map(user => (
                                <li key={user.id}>
                                    {user.name} - {user.attendance}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No users available.</p>
                    )}
                </div>
            </section>

            <section className="attendance-reports">
                <h2>Attendance Reports</h2>
                <button className="report-button" onClick={handleViewReports}>View Attendance Reports</button>
            </section>

            <section className="settings">
                <h2>Settings</h2>
                <button className="settings-button" onClick={handleSettings}>Adjust Settings</button>
            </section>
        </div>
    );
};

export default AdminDashboard;
