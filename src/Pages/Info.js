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
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
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
  const [toMobileApp, setToMobileApp] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  if (toHome) {
    return <Navigate to="/" />;
  }

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
  }

  if (toContact) {
    return <Navigate to="/contact" />;
  }

  if (toMobileApp) {
    return <Navigate to="/mobile-app" />;
  }

  const navItems = [
    "Home",
    "Info",
    "Single Player Games",
    "Contact",
    "Mobile App",
  ];

  const handleNavClick = (item) => {
    setDrawerOpen(false);
    if (item === "Home") setToHome(true);
    else if (item === "Single Player Games") setToSPG(true);
    else if (item === "Contact") setToContact(true);
    else if (item === "Mobile App") setToMobileApp(true);
  };

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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
              LearnCulia
            </Typography>
            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#000" }} onClick={() => handleNavClick(item)}>
                  {item}
                </Button>
              ))}
              <IconButton sx={{ ml: 1 }} onClick={() => setMode((p) => p === "light" ? "dark" : "light")} color="black">
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
            {/* Mobile hamburger */}
            <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>
              <IconButton onClick={() => setMode((p) => p === "light" ? "dark" : "light")} color="black">
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <IconButton color="black" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 220, pt: 2 }}>
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton onClick={() => handleNavClick(item)}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <h1 style={{ marginTop: 140 }}>Learn All About LearnCulia!</h1>
        <Card
          sx={[
            {
              mt: 5,
              mb: 6,
              width: { xs: "90%", sm: "80%", md: 900 },
              maxWidth: 900,
              textAlign: "center",
            },
            mode === "dark"
              ? { backgroundColor: "#242430", color: "#ffffff", border: "2px solid white" }
              : { backgroundColor: "#ffffff", color: "#000000", border: "2px solid black" },
          ]}
        >
          <CardContent sx={{ px: { xs: 3, sm: 5 }, py: 4 }}>
            <Typography sx={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)", mt: 2, fontWeight: "bold", color: "inherit" }}>
              About LearnCulia
            </Typography>
            <Typography sx={{ fontSize: "clamp(0.85rem, 1vw, 1rem)", mt: 1, lineHeight: 1.8, color: "inherit" }} component="div">
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

            <Typography sx={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)", mt: 6, fontWeight: "bold", color: "inherit" }}>
              Purpose
            </Typography>
            <Typography sx={{ fontSize: "clamp(0.85rem, 1vw, 1rem)", mt: 1, lineHeight: 1.8, color: "inherit" }} component="div">
              I want to make sure that every single student, who struggles to
              achieve success because of dyscalculia, will earn an opportunity
              in LearnCulia™ to sharpen mathematical skills for their benefit. I
              want to make sure that everyone can work on what they want to work
              on, with helpful and short tutorial videos to stay successful. I
              also strive to make this app even better, so if you have any
              advice or ideas, please contact me!
            </Typography>

            <Typography sx={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)", mt: 6, fontWeight: "bold", color: "inherit" }}>
              Single Player Games
            </Typography>
            <Typography sx={{ fontSize: "clamp(0.85rem, 1vw, 1rem)", mt: 1, lineHeight: 1.8, color: "inherit" }} component="div">
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

            <Typography sx={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)", mt: 6, fontWeight: "bold", color: "inherit" }}>
              About the Developer
            </Typography>
            <Typography sx={{ fontSize: "clamp(0.85rem, 1vw, 1rem)", mt: 1, lineHeight: 1.8, color: "inherit" }} component="div">
              Hey there! I am currently an undergraduate college student residing in California. App
              and web development is one of my passions, and I love to spend my
              free time working on some small app projects for fun. However, my
              biggest passion is my community. I wanted to build LearnCulia
              because there aren't many great tools out there that really
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
