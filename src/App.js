import React from 'react';
import './style.css';
import MainContainer from './Components/MainContainer';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';

import CreateGroups from './Components/CreateGroups';
import OnlineUsers from './Components/OnlineUsers';
import AllGroups from './Components/AllGroups';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*<Login />     <MainContainer />*/}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="app" element={<MainContainer />}>
            <Route path="welcome" element={<Welcome />}></Route>
            <Route path="chat/:_id" element={<ChatArea />}></Route>
            <Route path="users" element={<OnlineUsers />}></Route>
            <Route path="groups" element={<AllGroups />}></Route>
            <Route path="create-groups" element={<CreateGroups />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
