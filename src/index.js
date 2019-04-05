import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inbox from './components/Inbox';

const email = {
    sender : "React Newsletter",
    subject: "React Newsletter - Issue 36",
    date   : "Jul 15",
    message: "React Newsletter Issue 36 - July 15th 2016 Read this issue on the web http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme"
};

ReactDOM.render(<Inbox email={email} />, document.getElementById('root'));
