import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/dialogs";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { dialogsData, messagesData, postData } from "./index";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
		  <Route path="/profile/*" element={<Profile post={postData} />} />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs dialogs={dialogsData} messages={messagesData} /> // props дата файлы из index.js
              }
            />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
