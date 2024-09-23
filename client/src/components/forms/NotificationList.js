import React from 'react';
import './NotificationStyles.css'; // Здесь добавьте свои стили

const NotificationList = ({ notifications }) => {

    console.log('это работает')

    return (
        <div className="notification-list">
            {notifications.map(({ id, message, type }) => (
                <div key={id} className={`notification ${type}`}>
                    {message}
                </div>
            ))}
        </div>
    );
};

export default NotificationList;