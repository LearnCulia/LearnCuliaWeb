import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Game1.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import Carousel from "react-material-ui-carousel";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/GlobalState.js";

import FingerOne from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/fingerOne.png";
import FingerTwo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/fingerTwo.png";
import FingerThree from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/fingerThree.png";
import FingerFour from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/fingerFour.png";
import FingerFive from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/fingerFive.png";
import FingerSix from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/fingerSix.png";
import FingerSeven from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/fingerSeven.png";
import FingerEight from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/fingerEight.png";
import FingerNine from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/fingerNine.png";
import FingerTen from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/fingerTen.png";

import AppleIcon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/appleicon.png";
import OrangeIcon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/orangeicon.png";
import BananaIcon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/bananaicon.png";

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
    white: {
      main: "#ffffff",
      contrastText: "#000000",
    },
  },
});

const GamePage1 = () => {
  const [num, setNum] = React.useState(1);
  const [ready, setReady] = React.useState(true);
  const [img, setImg] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [challengeModal, setChallengeModal] = React.useState(false);
  const [fruit, setFruit] = useGlobalState("game1Fruit");
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  const [toChallenge, setToChallenge] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);

  if (toChallenge) {
    return <Navigate to="/gamepagechallenge1" />;
  }

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
  }

  const images = [
    FingerOne,
    FingerTwo,
    FingerThree,
    FingerFour,
    FingerFive,
    FingerSix,
    FingerSeven,
    FingerEight,
    FingerNine,
    FingerTen,
  ];

  const startGame = () => {
    randomNumGen();
    setReady(false);
  };

  const randomNumGen = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setNum(randomNum);
    setImg(images[randomNum - 1]);
  };

  const verify = (buttonId) => {
    isButtonClicked(true);
    let correctAns = num;
    if (count < 10) {
      if (correctAns == buttonId) {
        randomNumGen();
        isAnswerCorrect(true);
        setCount(count + 1);
      } else if (correctAns != buttonId) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setChallengeModal(true);
    }
  };

  const nextGameApple = () => {
    setFruit("apple");
    setChallengeModal(false);
    setToChallenge(true);
  };

  const nextGameOrange = () => {
    setFruit("orange");
    setChallengeModal(false);
    setToChallenge(true);
  };

  const nextGameBanana = () => {
    setFruit("banana");
    setChallengeModal(false);
    setToChallenge(true);
  };

  const numbers = [
    {
      id: 1,
      number: "1",
    },
    {
      id: 2,
      number: "2",
    },
    {
      id: 3,
      number: "3",
    },
    {
      id: 4,
      number: "4",
    },
    {
      id: 5,
      number: "5",
    },
    {
      id: 6,
      number: "6",
    },
    {
      id: 7,
      number: "7",
    },
    {
      id: 8,
      number: "8",
    },
    {
      id: 9,
      number: "9",
    },
    {
      id: 10,
      number: "10",
    },
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
        className="game1-gamepage"
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
          Quit Game
        </Button>
        <h1>Let's apply the skills we learned for the following problems!</h1>
        {ready ? (
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              variant="contained"
              color="black"
              size="large"
              sx={
                mode === "dark"
                  ? { backgroundColor: "#00ff9d", color: "#000000" }
                  : { backgroundColor: "#000000", color: "#00ff9d" }
              }
              onClick={startGame}
            >
              Press to Play
            </Button>
          </div>
        ) : (
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>
              What is the number of fingers shown by the hand(s)? Press the
              correct button below.
            </Typography>
            <img src={img} alt="Finger Number" />
            <Box sx={{ mt: 15 }}>
              {numbers.map((item) => (
                <Button
                  variant="contained"
                  color="black"
                  size="large"
                  sx={[
                    { mr: 5, fontSize: 22 },
                    mode === "dark"
                      ? { backgroundColor: "#00ff9d", color: "#000000" }
                      : { backgroundColor: "#000000", color: "#00ff9d" },
                  ]}
                  onClick={() => verify(item.id)}
                >
                  {item.number}
                </Button>
              ))}
            </Box>
            {buttonClicked ? (
              answerCorrect ? (
                <Typography sx={{ mt: 5, mb: 5 }}>👏Good Job!👏</Typography>
              ) : (
                <Typography sx={{ mt: 5, mb: 5 }}>
                  No pressure! Try it one more time!
                </Typography>
              )
            ) : (
              <Typography> </Typography>
            )}
          </div>
        )}
      </div>
      <Modal
        open={challengeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={[
            {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: 250,
              width: 400,
              backgroundColor: "#c3fae5",
              border: "2px solid #000",
              borderRadius: 4,
              boxShadow: 24,
              p: 4,
            },
            mode === "dark"
              ? { backgroundColor: "#00ff9d" }
              : { backgroundColor: "#c3fae5" },
          ]}
        >
          <h1>Congratulations!</h1>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You finished this section!
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Pick a fruit to continue to the next!
          </Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button
              variant="contained"
              color="white"
              size="large"
              sx={{ mb: 2, mt: 3 }}
              onClick={nextGameApple}
            >
              <img src={AppleIcon} alt="Apple Icon" />
            </Button>
            <Button
              variant="contained"
              color="white"
              size="large"
              sx={{ mb: 2, mt: 3, ml: 2 }}
              onClick={nextGameOrange}
            >
              <img src={OrangeIcon} alt="Orange Icon" />
            </Button>
            <Button
              variant="contained"
              color="white"
              size="large"
              sx={{ mb: 2, mt: 3, ml: 2 }}
              onClick={nextGameBanana}
            >
              <img src={BananaIcon} alt="Banana Icon" />
            </Button>
          </div>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default GamePage1;
