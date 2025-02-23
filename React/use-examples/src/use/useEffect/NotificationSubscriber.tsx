import React, { useState, useEffect } from 'react';

const NotificationSubscriber: React.FC = () => {
    const [notifications, setNotifications] = useState<string[]>([]);

    useEffect(() => {
        // Моковая подписка на уведомления
        const interval = setInterval(() => {
            setNotifications((prev) => [...prev, `Notification at ${new Date().toLocaleTimeString()}`]);
        }, 3000);

        // Очистка интервала при размонтировании
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h3>Notifications</h3>
            <ul>
                {notifications.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationSubscriber;