import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Unsign from "./pages/Unsign/Unsign";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import CreatePost from "./pages/CreatePost/Create";
import Search from "./pages/Search/Search";
import CreateBlog from "./pages/CreateBlog/Blog";
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
          <Route path="/" element={<Unsign />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Create" element={<CreatePost />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/CreateBlog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
