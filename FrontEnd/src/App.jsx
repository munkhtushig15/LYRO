import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Unsign from "./pages/Unsign/Unsign";
import MyBlogs from "./pages/Blog/myBlogs";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import CreatePost from "./pages/CreatePost/Create";
import Favorite from "./pages/Favorites/Favorite";
import Blog from "./pages/Blog/Blog";
import Food from "./pages/Blog/Food";
import Mountian from "./pages/Blog/Mountian";
import City from "./pages/Blog/City";
import Forest from "./pages/Blog/Forest";
import Beach from "./pages/Blog/Beach";
import Land from "./pages/Blog/Land";
import Mongolia from "./comps/16 countries visit/Mongolia";
import Switzerland from "./comps/16 countries visit/Switzerland";
import Germany from "./comps/16 countries visit/Germany";
import Canada from "./comps/16 countries visit/Canada";
import UnitedStates from "./comps/16 countries visit/UnitedStates";
import Australia from "./comps/16 countries visit/Australia";
import Japan from "./comps/16 countries visit/Japan";
import UnitedKingdom from "./comps/16 countries visit/UnitedKingdom";
import France from "./comps/16 countries visit/France";
import Denmark from "./comps/16 countries visit/Denmark";
import NewZealand from "./comps/16 countries visit/NewZealand";
import TheNetherLands from "./comps/16 countries visit/TheNetherLands";
import Norway from "./comps/16 countries visit/Norway";
import Italy from "./comps/16 countries visit/Italy";
import Finland from "./comps/16 countries visit/Finland";
import Spain from "./comps/16 countries visit/Spain";
import China from "./comps/16 countries visit/China";
import Russia from "./comps/16 countries visit/Russia";
import axios from "axios";
import OtherProfile from "./pages/Profile/OtherProfile";

export const instance = axios.create({
  baseURL: "https://lyro-be.vercel.app/",
  baseURL: "http://localhost:9911/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Unsign />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route path="/Create" element={<CreatePost />} />
          <Route path="/myBlogs" element={<MyBlogs />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Profile/:id" element={<OtherProfile />} />
          <Route path="/Favorites" element={<Favorite />} />

          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/Mountian" element={<Mountian />} />
          <Route path="/City" element={<City />} />
          <Route path="/Beach" element={<Beach />} />
          <Route path="/Forest" element={<Forest />} />
          <Route path="/Land" element={<Land />} />
          <Route path="/AboutFood" element={<Food />} />
          <Route path="/Home/Switzerland" element={<Switzerland />} />
          <Route path="/Home/Mongolia" element={<Mongolia />} />
          <Route path="/Home/Germany" element={<Germany />} />
          <Route path="/Home/Canada" element={<Canada />} />
          <Route path="/Home/UnitedStates" element={<UnitedStates />} />
          <Route path="/Home/Australia" element={<Australia />} />
          <Route path="/Home/Japan" element={<Japan />} />
          <Route path="/Home/UnitedKingdom" element={<UnitedKingdom />} />
          <Route path="/Home/France" element={<France />} />
          <Route path="/Home/Denmark" element={<Denmark />} />
          <Route path="/Home/NewZealand" element={<NewZealand />} />
          <Route path="/Home/TheNetherLands" element={<TheNetherLands />} />
          <Route path="/Home/Norway" element={<Norway />} />
          <Route path="/Home/Italy" element={<Italy />} />
          <Route path="/Home/Finland" element={<Finland />} />
          <Route path="/Home/Spain" element={<Spain />} />
          <Route path="/Home/China" element={<China />} />
          <Route path="/Home/Russia" element={<Russia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
