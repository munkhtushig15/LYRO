import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Unsign from "./pages/Unsign/Unsign";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Unsign" element={<Unsign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
