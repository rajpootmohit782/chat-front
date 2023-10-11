import React from 'react';
import './myStyles.css';
import Sidebar from './Sidebar';
import WorkArea from './WorkArea';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users_Groups';
import { Outlet } from 'react-router-dom';

export default function MainContainer() {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />

      {/*  <Welcome />     <Users_Groups /> <CreateGroups />*/}

      {/* <ChatArea conversation={conversation} /> */}
    </div>
  );
}
