import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MessagesContainer from "./components/Dialogs/Messages/MessagesContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/news";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/settings";
import UsersContainer from "./components/Users/UsersContainer"

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/messages/*" element={<MessagesContainer />} />
          <Route path="/users/*" element={<UsersContainer />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
