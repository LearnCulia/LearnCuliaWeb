import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/App.css";
import ChatBot from "./ChatBot";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import homei2 from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/homei2.jpeg";
import homei3 from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/homei2.jpg";
import contactPic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/contactPic.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../GlobalState";
import home1 from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/stem-t4l--PnSpCHYKsw-unsplash.jpg";
import Divider from "@mui/material/Divider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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

// function ChatbotBubble(props) {
//   const { children } = props;
//   const [clicked, setClicked] = React.useState(false);

//   if (clicked) {
//     return (
//       <iframe
//         src="https://www.chatbase.co/chatbot-iframe/Drmst_AXfeMAJszhQxAU1"
//         style={{ height: "20%", width: "30%", zIndex: 1 }}
//         frameborder="1"
//       ></iframe>
//     );
//   }

//   return (
//     <Box
//       onClick={() => setClicked(true)}
//       role="presentation"
//       sx={{ position: "fixed", bottom: 16, left: 16, width: 50, height: 50  }}
//     >
//       {children}
//     </Box>
//   );
// }

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
  const [toLogin, setToLogin] = React.useState(false);
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toProfile, setToProfile] = React.useState(false);

  const [mode, setMode] = useGlobalState("darkMode");
  const [registered, isRegistered] = useGlobalState("registered");

  const navItems = [
    "Home",
    "Info",
    "Single Player Games",
    "Contact",
    "Profile",
  ];

  if (toLogin) {
    return <Navigate to="/" />;
  }

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

  if (toProfile) {
    return <Navigate to="/profile" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="home">
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
                    } else if (item === "Info") {
                      setToInfo(true);
                    } else if (item === "Single Player Games") {
                      setToSPG(true);
                    } else if (item === "Contact") {
                      setToContact(true);
                    } else if (item === "Profile") {
                      setToProfile(true);
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
        <Toolbar id="back-to-top-anchor" />
        <Box
          className="home2"
          style={{
            backgroundImage: `url(${home1})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "102.5%",
            color: "black",
          }}
        >
          <h1 style={{ fontSize: 50 }}>
            Let LearnCulia guide you to conquer your math hurdles!
          </h1>
        </Box>
        {registered ? (
          <Box></Box>
        ) : (
          <Box className="home-no-reg">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
            <h1
              style={{
                fontSize: 50,
                display: "flex",
                flexDirection: "row",
                zIndex: 1000,
              }}
            >
              You're Not Logged In!
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                zIndex: 1000,
              }}
            >
              <Typography style={{}}>
                If you want to have custom profile pictures and more blah blah
                blah, click the button below to login!
              </Typography>
              <Button
                variant="contained"
                color="black"
                size="large"
                style={{ marginTop: 50 }}
                onClick={() => setToLogin(true)}
              >
                Login Today!
              </Button>
            </div>
          </Box>
        )}
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
                fontSize: 50,
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
              }}
            >
              About LearnCulia
            </h1>
            <Typography
              style={{
                marginLeft: -30,
                fontSize: 20,
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
                fontSize: 50,
                marginTop: -30,
                textAlign: "center",
              }}
            >
              Single Player Games
            </h1>
            <Typography
              style={{
                marginLeft: -30,
                fontSize: 20,
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
              style={{ marginTop: 50 }}
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
          <h1
            style={{
              fontSize: 50,
              textAlign: "center",
              marginLeft: 130
            }}
          >
            Contact
          </h1>
          <Box className="box5">
            <Typography style={{ marginLeft: 30, textAlign: "center", fontSize: 20 }}>
              Any issues, concerns, or suggestions? Please contact me from the
              button below or in the navigation bar above!
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={[
                {
                  marginTop: 5,
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
        <Divider variant="fullWidth" flexItem />
        <Box
          className="home6"
          style={
            mode === "dark"
              ? { backgroundColor: "#242430", color: "#ffffff" }
              : { backgroundColor: "#ffffff", color: "#000000" }
          }
        >
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={icon}
              className="footerLogo"
              alt="Footer LearnCulia Icon"
            />
            <h1>LearnCulia</h1>
          </Box>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Button
              sx={[
                mode === "dark" ? { color: "#2491FF" } : { color: "#1A70C6" },
              ]}
              onClick={() => setToInfo(true)}
            >
              Info
            </Button>
            <Button
              sx={[
                mode === "dark" ? { color: "#2491FF" } : { color: "#1A70C6" },
              ]}
              onClick={() => setToSPG(true)}
            >
              Single Player Games
            </Button>
            <Button
              sx={[
                mode === "dark" ? { color: "#2491FF" } : { color: "#1A70C6" },
              ]}
              onClick={() => setToContact(true)}
            >
              Contact
            </Button>
            <Button
              sx={[
                mode === "dark" ? { color: "#2491FF" } : { color: "#1A70C6" },
              ]}
              onClick={() => setToProfile(true)}
            >
              Profile
            </Button>
          </Box>
          <p>© 2024 LearnCulia. All rights reserved.</p>
        </Box>
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
