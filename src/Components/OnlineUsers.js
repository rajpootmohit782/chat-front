import React from 'react';
import './myStyles.css';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function OnlineUsers() {
  const [data, setData] = React.useState([]);
  const [shouldFetch, setShouldFetch] = React.useState(true);
  const [conversation, setConversation] = React.useState([]);

  const navigate = useNavigate();
  const a = JSON.parse(localStorage.getItem('userData'));
  console.log(a._id);
  React.useEffect(() => {
    if (!a) {
      navigate('/');
    }
  });

  React.useEffect(() => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${a.token}`,
      },
    };
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://9mv3cy-5000.csb.app/user/chat',
          { userId: a._id },
          config
        );
        const resData = await response.json();
        console.log('data is', resData);
        setData(resData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const updatedData = data.filter((item) => item._id !== a._id);
  console.log('updated', updatedData);

  return (
    <div className="list-container">
      <div className="ug-header">
        <p>All Users</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="search" className="search-box" />
      </div>
      <div className="ug-list">
        {updatedData.map((user) => (
          <div
            className="list-tem"
            key={user._id}
            onClick={async () => {
              const res = await fetch(`https://9mv3cy-5000.csb.app/chat/m`, {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${a.token}`,
                  'Content-Type': 'application/json', // Specify the content type if needed
                },
                body: JSON.stringify({ userId: user._id, chatId: a._id }), // Convert the data to JSON format
              });
              const resData = await res.json();
              setConversation(resData);
            }}
          >
            <p className="con-icon">{user.Name[0]}</p>
            <p className="con-title">{user.Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
