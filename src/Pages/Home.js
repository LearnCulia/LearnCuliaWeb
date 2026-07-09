import React from "react";
import "../App.css";
import ChatBot from "./ChatBot";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";
import homei2 from "../images/homei2.jpeg";
import homei3 from "../images/homei2.jpg";
import contactPic from "../images/contactPic.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../GlobalState";
import home1 from "../images/home1.jpg";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

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

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function Home(props) {
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toMobileApp, setToMobileApp] = React.useState(false);
  const [mode] = useGlobalState("darkMode");

  if (toInfo) {
    return <Navigate to="/info" />;
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

  return (
    <ThemeProvider theme={theme}>
      <div className="home">
        <NavBar />
        <div id="back-to-top-anchor" style={{ minHeight: 64 }} />
        <Box
          className="home2"
          style={{
            backgroundImage: `url(${home1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
            color: "black",
          }}
        >
          <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)", textAlign: "center", padding: "0 1rem" }}>
            Let LearnCulia guide you to conquer your math hurdles!
          </h1>
        </Box>
        <Box
          className="home3"
          style={
            mode === "dark"
              ? { backgroundColor: "#242430", color: "#ffffff" }
              : { backgroundColor: "#ffffff", color: "#000000" }
          }
        >
          <img src={homei2} className="home3i" alt="Home Image 2" />
          <Box className="box3">
            <h1
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                marginTop: 0,
                textAlign: "center"
              }}
            >
              About LearnCulia
            </h1>
            <Typography
              style={{
                fontSize: "clamp(0.85rem, 1vw, 1.1rem)",
                textAlign: "center",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              Welcome to LearnCulia – an exciting app designed to empower young
              kids who struggle with dyscalculia on their journey to conquer
              math challenges with confidence and joy. Through a collection of
              interactive games, tutorials, and challenge puzzles, LearnCulia
              turns learning into an exciting adventure. Unlike traditional
              learning environments, this app provides small tutorial videos
              before each game to not just learn how to play the game, but also
              learn the mathematical concept. To enjoy this app even more, you
              can create an account to have your own custom profile picture!
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={[
                {
                  mt: 5,
                  fontSize: "clamp(0.75rem, 0.8vw, 1rem)",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: mode === "dark" ? "#00ff9d" : "#000000",
                  },
                },
                mode === "dark"
                  ? { backgroundColor: "#00ff9d", color: "#000000" }
                  : { backgroundColor: "#000000", color: "#00ff9d" },
              ]}
              onClick={() => setToInfo(true)}
            >
              Learn More About LearnCulia
            </Button>
          </Box>
        </Box>
        <Box
          className="home4"
          sx={
            mode === "dark"
              ? { backgroundColor: "#00ff9d" }
              : { backgroundColor: "#c3fae5" }
          }
        >
          <Box className="box4">
            <h1
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                marginTop: 0,
                textAlign: "center"
              }}
            >
              Single Player Games
            </h1>
            <Typography
              style={{
                fontSize: "clamp(0.85rem, 1vw, 1.1rem)",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Currently, there are six fun and exciting challenge games with
              different levels of difficulty. There is no need to go through all
              the games in order, or complete every single game. If you find
              yourself struggling with a mathematical concept, simply click the
              respective game, and start the challenge! Every single player game
              has an information/tutorial page and two different game pages: the
              normal level and the challenge. You may also complete the game
              however many times you would like. In the future, there will be
              multiplayer games, and way more single player games based on
              difficulty and age level!
            </Typography>
            <Button
              variant="contained"
              color="black"
              size="large"
              style={{ marginTop: 50, fontSize: "clamp(0.75rem, 0.8vw, 1rem)" }}
              onClick={() => setToSPG(true)}
            >
              Single Player Games
            </Button>
          </Box>
          <img src={homei3} className="home4i" alt="Home Image 2" />
        </Box>
        <Box
          className="home5"
          style={
            mode === "dark"
              ? { backgroundColor: "#242430", color: "#ffffff" }
              : { backgroundColor: "#ffffff", color: "#000000" }
          }
        >
          <Box className="box5">
            <h1
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                textAlign: "center",
                margin: "0 0 16px 0",
              }}
            >
              Contact
            </h1>
            <Typography style={{ textAlign: "center", fontSize: "clamp(0.85rem, 1vw, 1.1rem)" }}>
              Any issues, concerns, or suggestions? Please contact me from the
              button below or in the navigation bar above!
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={[
                {
                  mt: 5,
                  fontSize: "clamp(0.75rem, 0.8vw, 1rem)",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: mode === "dark" ? "#00ff9d" : "#000000",
                  },
                },
                mode === "dark"
                  ? { backgroundColor: "#00ff9d", color: "#000000" }
                  : { backgroundColor: "#000000", color: "#00ff9d" },
              ]}
              onClick={() => setToContact(true)}
            >
              Contact
            </Button>
          </Box>
          <img src={contactPic} alt="Contact Pic" className="contactPic"/>
        </Box>
        <Footer mode={mode} />
        <ScrollTop {...props}>
          <Fab
            size="small"
            aria-label="scroll back to top"
            style={{ backgroundColor: "#6bffc6", color: "black" }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <ChatBot />
      </div>
    </ThemeProvider>
  );
}
