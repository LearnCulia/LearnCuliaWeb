import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Game1.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import Carousel from "react-material-ui-carousel";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/GlobalState.js";

import FingerOne from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/FingerOneSlide.png";
import FingerTwo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/FingerTwoSlide.png";
import FingerThree from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/FingerThreeSlide.png";
import FingerFour from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/FingerFourSlide.png";
import FingerFive from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/FingerFiveSlide.png";
import FingerSix from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/FingerSixSlide.png";
import FingerSeven from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/FingerSevenSlide.png";
import FingerEight from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/FingerEightSlide.png";
import FingerNine from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/FingerNineSlide.png";
import FingerTen from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/FingerTenSlide.png";

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
    red: {
      main: "#ff1212",
      contrastText: "#0fff93",
    },
  },
});

const Game1 = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  const [toGamePage1, setToGamePage1] = React.useState(false);

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

  if (toGamePage1) {
    return <Navigate to="/gamepage1" />;
  }

  const navItems = [
    "Home",
    "Info",
    "Single Player Games",
    "Contact",
    "Profile",
  ];

  const slideItems = [
    <img src={FingerOne} alt="FingerOne" />,
    <img src={FingerTwo} alt="FingerTwo" />,
    <img src={FingerThree} alt="FingerThree" />,
    <img src={FingerFour} alt="FingerFour" />,
    <img src={FingerFive} alt="FingerFive" />,
    <img src={FingerSix} alt="FingerSix" />,
    <img src={FingerSeven} alt="FingerSeven" />,
    <img src={FingerEight} alt="FingerEight" />,
    <img src={FingerNine} alt="FingerNine" />,
    <img src={FingerTen} alt="FingerTen" />,
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={[
          { height: 50 },
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" },
        ]}
      />
      <div
        className="game1-page"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <Button
          variant="contained"
          color="black"
          size="large"
          sx={[
            { position: "absolute", top: 110, left: 50 },
            mode === "dark"
              ? { backgroundColor: "#00ff9d", color: "#000000" }
              : { backgroundColor: "#000000", color: "#00ff9d" },
          ]}
          onClick={() => setToSPG(true)}
        >
          Go Back
        </Button>
        <h1>Welcome to Counting!</h1>
        <Typography>
          Take some time to memorize the images from the slideshow below. Click
          the dots below the slideshow to see the rest of it!
        </Typography>
        <Typography>
          Note that the slides will automatically go through the slideshow if no
          action is taken.
        </Typography>
        <p style={{ color: "red" }}>
          *Fingers might not change in the game. In this case, just click the
          correct number again!
        </p>
        <Carousel
          sx={{ width: 710, alignSelf: "center", mt: 5 }}
          activeIndicatorIconButtonProps={{
            color: "#6bffc6",
          }}
        >
          {slideItems.map((item, i) => item)}
        </Carousel>
        <Typography sx={{ mt: 5 }}>
          Now, let's try some problems by clicking the button below!
        </Typography>
        <Button
          sx={[
            { mt: 5, mb: 10 },
            mode === "dark"
              ? { backgroundColor: "#00ff9d", color: "#000000" }
              : { backgroundColor: "#000000", color: "#00ff9d" },
          ]}
          onClick={() => setToGamePage1(true)}
        >
          Click when you are ready!
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Game1;
