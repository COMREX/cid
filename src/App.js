// import {Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Linux from "./pages/linux/linux";
import Docker from "./pages/docker/docker";
import Windows from "./pages/windows/windows";
import Apple from "./pages/apple/apple";
import Cmd from "./pages/cmd/cmd";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Linux />} />
            <Route path="/docker" element={<Docker />} />
            <Route path="/windows" element={<Windows />} />
            <Route path="/apple" element={<Apple />} />
            <Route path="/cmd" element={<Cmd />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
