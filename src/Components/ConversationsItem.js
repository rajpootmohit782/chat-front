import React from 'react';
import './myStyles.css';
import { useNavigate } from 'react-router-dom';

export default function ConversationsItemr({ props }) {
  console.log('pp', props);
  const navigate = useNavigate();
  return (
    <div className="conversation-container" onClick={() => navigate('chat')}>
      <p className="con-icon">{props.Name[0]}</p>
      <p className="con-title">{props.Name}</p>
      {props.lastMessage && (
        <p className="con-lastMessage">{props.lastMessage}</p>
      )}
      <p className="con-timestamp">{props.timeStamp}</p>
    </div>
  );
}
