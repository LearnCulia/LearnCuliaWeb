import React from "react";
import "./App.css";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import SinglePlayerGames from "./Pages/SinglePlayerGames";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import MobileApp from "./Pages/MobileApp";
import Game1 from "./Pages/GamePages/Game1";
import Game2 from "./Pages/GamePages/Game2";
import Game3 from "./Pages/GamePages/Game3";
import Game4 from "./Pages/GamePages/Game4";
import Game5 from "./Pages/GamePages/Game5";
import Game6 from "./Pages/GamePages/Game6";
import GamePage1 from "./Pages/GamePages/GamePage1";
import GamePage2 from "./Pages/GamePages/GamePage2";
import GamePage3 from "./Pages/GamePages/GamePage3";
import GamePage4 from "./Pages/GamePages/GamePage4";
import GamePage5 from "./Pages/GamePages/GamePage5";
import GamePage6 from "./Pages/GamePages/GamePage6";
import GamePageMid5 from "./Pages/GamePages/GamePageMid5";
import GamePageMid6 from "./Pages/GamePages/GamePageMid6";
import GamePageChallenge1 from "./Pages/GamePages/GamePageChallenge1";
import GamePageChallenge2 from "./Pages/GamePages/GamePageChallenge2";
import GamePageChallenge3 from "./Pages/GamePages/GamePageChallenge3";
import GamePageChallenge4 from "./Pages/GamePages/GamePageChallenge4";
import GamePageChallenge5 from "./Pages/GamePages/GamePageChallenge5";
import GamePageChallenge6 from "./Pages/GamePages/GamePageChallenge6";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/single-player-games" element={<SinglePlayerGames />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/game1" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
        <Route path="/game5" element={<Game5 />} />
        <Route path="/game6" element={<Game6 />} />
        <Route path="/gamepage1" element={<GamePage1 />} />
        <Route path="/gamepage2" element={<GamePage2 />} />
        <Route path="/gamepage3" element={<GamePage3 />} />
        <Route path="/gamepage4" element={<GamePage4 />} />
        <Route path="/gamepage5" element={<GamePage5 />} />
        <Route path="/gamepage6" element={<GamePage6 />} />
        <Route path="/gamepagemid5" element={<GamePageMid5 />} />
        <Route path="/gamepagemid6" element={<GamePageMid6 />} />
        <Route path="/gamepagechallenge1" element={<GamePageChallenge1 />} />
        <Route path="/gamepagechallenge2" element={<GamePageChallenge2 />} />
        <Route path="/gamepagechallenge3" element={<GamePageChallenge3 />} />
        <Route path="/gamepagechallenge4" element={<GamePageChallenge4 />} />
        <Route path="/gamepagechallenge5" element={<GamePageChallenge5 />} />
        <Route path="/gamepagechallenge6" element={<GamePageChallenge6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
