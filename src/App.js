import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  const { dialogsPage, profilePage } = props.state;
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile/*"
            element={
              <Profile
                posts={profilePage.posts}
                dispatch={props.dispatch}
                newPostText={profilePage.newPostText}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                messages={dialogsPage.messages}
                dispatch={props.dispatch}
                newMessageText={dialogsPage.newMessageText}
                dialogs={dialogsPage.dialogs}
              />
            }
          />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
