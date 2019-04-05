import React from 'react';

const Inbox = ({ email }) => {
    const { sender, subject, date, message } = email;
    return (
        <div className="container">
            <div className="checkbox">
                <input type="checkbox" />
            </div>
            <div className="pin">
                <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            </div>
            <div className="email-contents">
                <div className="sender">
                    {sender}
                </div>
                <div className="subject">
                    {subject}
                </div>
                <div className="message">
                    {message}
                </div>
            </div>
            <div className="date">
                {date}
            </div>
        </div>
    );
};

export default Inbox;
