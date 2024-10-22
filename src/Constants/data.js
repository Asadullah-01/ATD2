// src/Constants/data.js

import img1 from "../Assets/images/IMG-20210101-WA0020.jpg"; // Import the image

export const users = [
    {
        id: 'EMP001',
        name: 'Asad Ullah',
        profilePic: img1,
        email: 'asad@example.com',
        settings: {
            theme: 'light',
        },
        notifications: [
            { id: 1, message: "Your profile was updated successfully.", date: "2024-10-01" },
            { id: 2, message: "Attendance marked successfully.", date: "2024-10-02" },
        ],
    },
    {
        id: 'EMP002',
        name: 'Haroor Butt',
        profilePic: img1,
        email: 'haroor@example.com',
        settings: {
            theme: 'dark',
        },
        notifications: [
            { id: 1, message: "New company policy update available.", date: "2024-09-30" },
            { id: 2, message: "Don't forget to complete your profile.", date: "2024-10-01" },
        ],
    },
    {
        id: 'EMP003',
        name: 'Rabia',
        profilePic: img1,
        email: 'rabia@example.com',
        settings: {
            theme: 'light',
        },
        notifications: [
            { id: 1, message: "Attendance marked successfully.", date: "2024-10-03" },
        ],
    },
    {
        id: 'EMP004',
        name: 'Saniya',
        profilePic: img1,
        email: 'saniya@example.com',
        settings: {
            theme: 'light',
        },
        notifications: [
            { id: 1, message: "Your settings have been updated.", date: "2024-09-28" },
        ],
    },
    {
        id: 'EMP005',
        name: 'Sherry',
        profilePic: img1,
        email: 'sherry@example.com',
        settings: {
            theme: 'dark',
        },
        notifications: [
            { id: 1, message: "Welcome to the team! Update your profile.", date: "2024-10-02" },
            { id: 2, message: "Attendance marked successfully.", date: "2024-10-03" },
        ],
    },
    {
        id: 'EMP006',
        name: 'Talha',
        profilePic: img1,
        email: 'talha@example.com',
        settings: {
            theme: 'light',
        },
        notifications: [
            { id: 1, message: "New announcement available in the dashboard.", date: "2024-09-27" },
        ],
    },
    {
        id: 'EMP007',
        name: 'Ahmeer Lala',
        profilePic: img1,
        email: 'ahmeer@example.com',
        settings: {
            theme: 'dark',
        },
        notifications: [
            { id: 1, message: "Update your profile for better visibility.", date: "2024-09-29" },
        ],
    },
    {
        id: 'EMP008',
        name: 'Hassan',
        profilePic: img1,
        email: 'hassan@example.com',
        settings: {
            theme: 'light',
        },
        notifications: [
            { id: 1, message: "Attendance marked successfully.", date: "2024-10-01" },
        ],
    },
];
