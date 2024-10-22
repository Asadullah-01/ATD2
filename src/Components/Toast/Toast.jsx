// src/components/CustomToast.js

import React from 'react';
import "../Toast/Toast.css"; // Create a CSS file for styling

const CustomToast = ({ message, type, onClose }) => {
    return (
        <div className={`custom-toast ${type}`} onClick={onClose}>
            {message}
        </div>
    );
};

export default CustomToast;
