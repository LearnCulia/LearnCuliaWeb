import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Game5.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    seaGreen: {
      main: "#6bffc6",
      light: "#6bffc6",
      dark: "#008552",
      contrastText: "#0d3023",
    },
    black: {
      main: "#000000",
      contrastText: "#00ff9d",
    },
  },
});

const GamePageMid5 = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toGamePageChallenge5, setToGamePageChallenge5] = React.useState(false);

  if (toHome) {
    return <Navigate to="/home" />;
  }

  if (toInfo) {
    return <Navigate to="/info" />;
  }

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
  }

  if (toContact) {
    return <Navigate to="/contact" />;
  }

  if (toGamePageChallenge5) {
    return <Navigate to="/gamepagechallenge5" />;
  }

  const navItems = [
    "Home",
    "Info",
    "Single Player Games",
    "Contact",
    "Profile",
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="game5-page">
        <Button
          variant="contained"
          color="black"
          size="large"
          sx={{ position: "absolute", top: 110, left: 50 }}
          onClick={() => setToSPG(true)}
        >
          Quit Game
        </Button>
        <h1>Before we move on to the challenge...</h1>
        <Typography>
          Let's talk about MORE comparisons!
        </Typography>
        <Typography>
          Also, this next challenge will involve a different game!
        </Typography>
        <Typography sx={{ mt: 5, mb: 5 }}>
          Click the video below to watch!
        </Typography>
        <iframe
          width="560"
          height="315"
          style={{ borderRadius: 20 }}
          src="https://www.youtube.com/embed/crTjlicH_lQ?si=6RUbWTAKeSOeC0W9"
          title="LearnCulia Youtube Choosing Comparison Signs Instruction Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <Typography sx={{ mt: 5 }}>
          Now, let's try some problems by clicking the button below!
        </Typography>
        <Button sx={{ mt: 5, mb: 10 }} onClick={() => setToGamePageChallenge5(true)}>Click when you are ready!</Button>
      </div>
    </ThemeProvider>
  );
};

export default GamePageMid5;
