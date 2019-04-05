import React from 'react';

const Inbox = ({ email }) => {
    const { sender, subject, date, message } = email;
    return (
        <div className="container">
            <div className="sender">
                {sender}
            </div>
            <div className="subject">
                {subject}
            </div>
            <div className="date">
                {date}
            </div>
            <div className="message">
                {message}
            </div>
        </div>
    );
};

export default Inbox;
