import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Game4.css";
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

const Game4 = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);

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

  const navItems = [
    "Home",
    "Info",
    "Single Player Games",
    "Contact",
    "Profile",
  ];

  return (
    <ThemeProvider theme={theme}>
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
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <div className="game4-page">
        <Button
          variant="contained"
          color="black"
          size="large"
          sx={{ position: "absolute", top: 110, left: 50 }}
          onClick={() => setToSPG(true)}
        >
          Go Back
        </Button>
        <h1>Welcome to Reversing Math Equations!</h1>
        <Typography>
          Let's talk about how to reverse addition and subtraction equations!
        </Typography>
        <Typography sx={{ mt: 5, mb: 5 }}>
          Click the video below to watch!
        </Typography>
        <iframe
          width="560"
          height="315"
          style={{ borderRadius: 20 }}
          src="https://www.youtube.com/embed/6VsL-9ISrj4?si=KIDvtBBdzefSoDQW"
          title="LearnCulia Youtube Reversing Equations Instruction Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <Typography sx={{ mt: 5, mb: 5 }}>
          Now, let's try some problems by clicking the button below!
        </Typography>
        <Button sx={{ mt: 5, mb: 10 }}>Click when you are ready!</Button>
      </div>
    </ThemeProvider>
  );
};

export default Game4;
