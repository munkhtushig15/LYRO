import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import Profile from "./pages/Profile/Profile";
import Unsign from "./pages/Unsign/Unsign";

import MyBlogs from "./pages/Blog/myBlogs";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import CreatePost from "./pages/CreatePost/Create";
import Search from "./pages/Search/Search";
import Blog from "./pages/Blog/Blog";
import Mountian from "./pages/Blog/Mountian";
import Favorite from "./pages/Favorites/Favorite";
import City from "./pages/Blog/City";
import axios from "axios";
export const instance = axios.create({
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
          <Route path="/Search" element={<Search />} />
          <Route path="/myBlogs" element={<MyBlogs />} />
          <Route path="/Profile" element={<Profile />} />

          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/Mountian" element={<Mountian />} />
          <Route path="/Favorites" element={<Favorite />} />
          <Route path="/City" element={<City />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
