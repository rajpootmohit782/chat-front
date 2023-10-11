import React, { useState } from 'react';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { IconButton } from '@mui/material';

export default function CreateGroups() {
  const a = JSON.parse(localStorage.getItem('userData'));
  console.log(a._id, 'assss');
  const [groupName, setGroupName] = useState('');
  const [users, setUsers] = useState([]);
  const [authorization, setAuthorization] = useState(''); // You need to set your authorization token here

  const createGroup = () => {
    const groupData = {
      name: groupName,
      users: a._id,
    };

    fetch('https://9mv3cy-5000.csb.app/chat/groupCreate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization, // Set your authorization token here
      },
      body: JSON.stringify(groupData),
    })
      .then((response) => {
        if (response.ok) {
          // Group created successfully
          // You can handle the success action here
        } else {
          // Handle errors if needed
          console.error('Error creating group');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="createGroups-container">
      <input
        placeholder="Group Name"
        className="search-box"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <IconButton onClick={createGroup}>
        <DoneOutlineRoundedIcon />
      </IconButton>
    </div>
  );
}
