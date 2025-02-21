import React from "react";


interface NotificationProps {
    message: string,
    type: 'success' | 'error' | 'warning',
    onClose: () => void;
}


const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
    const backgroundColor = {
        success: '#d4edda',
        error: '#f8d7da',
        warning: '#fff3cd'
    }[type];

    return (
        <div style={{ backgroundColor, padding: '15px', margin: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <span>{message}</span>
            <button onClick={onClose}>X</button>
        </div>
    );
}

export default Notification;