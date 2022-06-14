import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom"
import "./App.css";
import Home from "./components/pages/home";
import Explore from "./components/pages/explore";
import Notifications from "./components/pages/notifications";
import Bookmarks from "./components/pages/bookmarks";
import Lists from "./components/pages/lists";
import Profile from "./components/pages/profile";
import Messages from "./components/pages/messages";
import ForYou from "./components/ForYou";
import TrendingTab from "./components/TrendingTab";
import MarvelTab from "./components/MarvelTab";
import NewsTab from "./components/NewsTab";
import NasaTab from "./components/NASATab";
import EntertainmentTab from "./components/EntertainmentTab";
import MeowPopup from "./components/MeowPopup";
import Mentions from "./components/Mentions";
import Portal from "./components/pages/portal";
import AllMention from "./components/AllMention";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/explore' element={<Explore />} >
            <Route path='' element={<ForYou />} />
            <Route path='tabs'>
              <Route path='for-you' element={<ForYou />} />
              <Route path='trending' element={<TrendingTab />} />
              <Route path='marvel' element={<MarvelTab />} />
              <Route path='news' element={<NewsTab />} />
              <Route path='nasa' element={<NasaTab />} />
              <Route path='entertainment' element={<EntertainmentTab />} />
            </Route>
          </Route>
          <Route path='/notifications' element={<Notifications />} > 
            <Route path='' element={<AllMention />} />
            <Route path='mentions' element={<Mentions />} />
          </Route>
          <Route path='/messages' element={<Messages />} /> 
          <Route path='/bookmarks' element={<Bookmarks />} /> 
          <Route path='/lists' element={<Lists />} /> 
          <Route path='/profile' element={<Profile />} /> 
          <Route path='compose' >
            <Route path='meow' element={<MeowPopup />} />
          </Route>

          <Route path='/portal' element={<Portal />} /> 
        </Routes> 
      </div>
    </BrowserRouter>
  );
}


export default App;