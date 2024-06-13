import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import SinglePlayerGames from "./Pages/SinglePlayerGames";
import Contact from "./Pages/Contact";
import Game1 from "./Pages/GamePages/Game1";
import Game2 from "./Pages/GamePages/Game2";
import Game3 from "./Pages/GamePages/Game3";
import Game4 from "./Pages/GamePages/Game4";
import Game5 from "./Pages/GamePages/Game5";
import Game6 from "./Pages/GamePages/Game6";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/single-player-games" element={<SinglePlayerGames />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/game1" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
        <Route path="/game5" element={<Game5 />} />
        <Route path="/game6" element={<Game6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
