import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Profile.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import ProfilePic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/profilePic.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

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

const Profile = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toProfile, setToProfile] = React.useState(false);

  const [registered, setRegistered] = React.useState(false);

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
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="info-page">
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
            </Box>
          </Toolbar>
        </AppBar>
        {registered ? (
          <h1>Welcome top profile</h1>
        ) : (
          <div className="profile-not-logged">
            <h1>
              You're not logged in! Log in or Register to access your Profile!
            </h1>
            <img
              src={ProfilePic}
              alt="Profile Picture"
              className="profile-icon"
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Profile;
