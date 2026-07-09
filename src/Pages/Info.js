import React from "react";
import "../CSSFiles/Info.css";
import ChatBot from "./ChatBot";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../images/LearnCuliaIcon.png";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useGlobalState } from "../GlobalState";

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

const Info = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toProfile, setToProfile] = React.useState(false);
  const [toMobileApp, setToMobileApp] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  if (toHome) {
    return <Navigate to="/home" />;
  }

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
  }

  if (toContact) {
    return <Navigate to="/contact" />;
  }

  if (toProfile) {
    return <Navigate to="/profile" />;
  }

  if (toMobileApp) {
    return <Navigate to="/mobile-app" />;
  }

  const navItems = [
    "Home",
    "Info",
    "Single Player Games",
    "Contact",
    "Profile",
    "Mobile App",
  ];

  return (
    <ThemeProvider theme={theme}>
      <div
        className="info-page"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <AppBar component="nav" color="seaGreen">
          <Toolbar>
            <img src={logo} className="navLogo" alt="LearnCuliaLogo" />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                display: { xs: "none", sm: "block" },
              }}
            >
              LearnCulia
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#000" }}
                  onClick={() => {
                    if (item === "Home") {
                      setToHome(true);
                    } else if (item === "Single Player Games") {
                      setToSPG(true);
                    } else if (item === "Contact") {
                      setToContact(true);
                    } else if (item === "Profile") {
                      setToProfile(true);
                    } else if (item === "Mobile App") {
                      setToMobileApp(true);
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
              <IconButton
                sx={{ ml: 1 }}
                onClick={() =>
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  )
                }
                color="black"
              >
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <h1 style={{ marginTop: 140 }}>Learn All About LearnCulia!</h1>
        <Card
          sx={[
            {
              mt: 5,
              height: "140vh",
              width: 900,
              textAlign: "center",
            },
            mode === "dark"
              ? {
                  backgroundColor: "#242430",
                  color: "#ffffff",
                  border: "2px solid white",
                }
              : {
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  border: "2px solid black",
                },
          ]}
        >
          <CardContent>
            <Typography sx={{ fontSize: 25, mt: 2, fontWeight: "bold" }} color="black">
              About LearnCulia
            </Typography>
            <Typography sx={{ fontSize: "1vw", mt: 1 }} component="div">
              Welcome to LearnCulia™ – an exciting app designed to empower young
              kids who struggle with dyscalculia on their journey to conquer
              math challenges with confidence and joy. Through a collection of
              interactive games, tutorials, and challenge puzzles, LearnCulia™
              turns learning into an exciting adventure. Unlike traditional
              learning environments, this app provides small tutorial videos
              before each game to not just learn how to play the game, but also
              learn the mathematical concept. To enjoy this app even more, you
              can create an account to have your own custom profile picture!
            </Typography>

            <Typography sx={{ fontSize: 25, mt: 6, fontWeight: "bold" }} color="black">
              Purpose
            </Typography>
            <Typography sx={{ fontSize: "1vw", mt: 1 }} component="div">
              I want to make sure that every single student, who struggles to
              achieve success because of dyscalculia, will earn an opportunity
              in LearnCulia™ to sharpen mathematical skills for their benefit. I
              want to make sure that everyone can work on what they want to work
              on, with helpful and short tutorial videos to stay successful. I
              also strive to make this app even better, so if you have any
              advice or ideas, please contact me!
            </Typography>

            <Typography sx={{ fontSize: 25, mt: 6, fontWeight: "bold" }} color="black">
              Single Player Games
            </Typography>
            <Typography sx={{ fontSize: "1vw", mt: 1 }} component="div">
              Currently, there are six fun and exciting challenge games with
              different levels of difficulty. There is no need to go through all
              the games in order, or complete every single game. If you find
              yourself struggling with a mathematical concept, simply click the
              respective game, and start the challenge! Every single player game
              has an information/tutorial page and two different game pages: the
              normal level and the challenge. You first start on the information
              page where you can watch the necessary tutorial videos for the
              game. After you correctly answer 10 problems, you may move on to
              the challenge problems. If you correctly answer 10 challenge
              problems, you have completed the game. If you feel stuck anywhere,
              there will be comforting messages and extra guidance to keep up
              that positive attitude! You may also complete the game however
              many times you would like. In the future, there will be
              multiplayer games, and way more single player games based on
              difficulty and age level!
            </Typography>

            <Typography sx={{ fontSize: 25, mt: 6, fontWeight: "bold" }} color="black">
              About the Developer
            </Typography>
            <Typography sx={{ fontSize: "1vw", mt: 1 }} component="div">
              Hey there! I am a high school student residing in California. App
              and web development is one of my passions, and I love to spend my
              free time working on some small app projects for fun. However, my
              biggest passion is my community. I wanted to build LearnCulia
              because there aren’t many great tools out there that really
              support and encourage young students who struggle with dyscalculia
              to solve math problems with the development of necessary skills.
              In this app, I want to make sure that everyone gets an opportunity
              to access a fun environment to hone their skills. You are welcome
              to contact me below if you have any questions!
            </Typography>
          </CardContent>
        </Card>
        <Footer mode={mode} />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
};

export default Info;
