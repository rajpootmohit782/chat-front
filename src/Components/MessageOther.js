import React from 'react';
import './myStyles.css';

export default function MessageOther() {
  var props1 = { name: 'RandomUser', message: 'Message andome' };
  return (
    <div className="other-message-container">
      <div className="conversation-container">
        <p className="con-icon">{props1.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{props1.name}</p>
          <p className="con-lastmessage">{props1.message}</p>
          <p className="con-timeStamp">10:00</p>
        </div>
      </div>
    </div>
  );
}
