import React from 'react';
import './myStyles.css';

export default function MessageSelf() {
  var props1 = { name: 'YourName', message: 'This is your message' };

  return (
    <div className="self-message-container">
      <div className="conversatio-container">
        <div className="messageBox">
          <p>{props1.message}</p>
          <p className="con-timeStamp">10:00</p>
        </div>
      </div>
    </div>
  );
}
