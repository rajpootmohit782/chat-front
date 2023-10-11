import React from 'react';
import './myStyles.css';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  const a = JSON.parse(localStorage.getItem('userData'));
  //  console.log(a);
  React.useEffect(() => {
    if (!a) {
      navigate('/');
    }
  });

  //   <img
  //   src="your-image-source-here.png"
  //   alt="logo"
  //   className="welcomelogo"
  // />

  return (
    <div className="welcome-container">
      <p>View and Text directly to the people present In the chat Rooms.</p>
    </div>
  );
}
