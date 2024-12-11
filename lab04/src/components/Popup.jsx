import React from 'react';
import '../styles/Popup.css';

const Popup = ({ onStay, onLeave }) => {
    return (
        <div className="popup">
            <p>You have unsaved changes. Are you sure you want to leave?</p>
            <button onClick={onStay}>Stay</button>
            <button onClick={onLeave}>Leave</button>
        </div>
    );
};

export default Popup;
