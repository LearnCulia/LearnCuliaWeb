import React from "react";
import "../CSSFiles/MobileApp.css";
import ChatBot from "./ChatBot";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import logo from "../images/LearnCuliaIcon.png";
import icon from "../images/learnculiaiconlogo.jpg";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import { useGlobalState } from "../GlobalState";

import MobileAppSS from "../images/MobileApp.jpg";

const theme = createTheme({
  palette: {
    seaGreen: {
      main: "#6bffc6",
      light: "#6bffc6",
      dark: "#0fd98b",
      contrastText: "#0d3023",
    },
    black: {
      main: "#000000",
      contrastText: "#00ff9d",
    },
  },
});

const MobileApp = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toProfile, setToProfile] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

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
        className="mobileapp-page"
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
        <Typography
          style={{
            marginTop: "15vh",
            marginBottom: "10vh",
            fontSize: "2vw",
            fontWeight: "bold",
          }}
        >
          The LearnCulia Mobile Application!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "85%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            src={MobileAppSS}
            style={{
              marginTop: "5vh",
              borderRadius: 16,
              width: "70vh",
              height: "70vh",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30vw",
              marginLeft: "10vw",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.5vh",
                fontWeight: "bold",
                marginBottom: "5vh",
                textAlign: "center",
              }}
            >
              Download our mobile application today to have the games right in
              your hands (iOS Only):
            </Typography>
            <Link
              href="https://apps.apple.com/us/app/learnculia/id6467522608"
              color="seaGreen.dark"
              sx={{ fontSize: "2.5vh", textAlign: "center" }}
            >
              View and Download on App Store.
            </Link>
          </Box>
        </Box>
        <Divider
          variant="fullWidth"
          flexItem
          sx={[
            mode === "dark"
              ? { borderColor: "#ffffff" }
              : { borderColor: "#E0E0E0" },
            { marginBottom: -45, marginTop: 25 },
          ]}
        />
        <Box
          className="footer"
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
              onClick={() => setToHome(true)}
            >
              Home
            </Button>
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
        <ChatBot />
      </div>
    </ThemeProvider>
  );
};

export default MobileApp;
