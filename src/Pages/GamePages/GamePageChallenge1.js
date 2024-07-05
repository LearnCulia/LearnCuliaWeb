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
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import OneApple from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/AppleImages/oneApple.png";
import TwoApple from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/AppleImages/twoApple.png";
import ThreeApple from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/AppleImages/threeApple.png";
import FourApple from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/AppleImages/fourApple.png";
import FiveApple from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/AppleImages/fiveApple.png";
import SixApple from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/AppleImages/sixApple.png";
import SevenApple from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/AppleImages/sevenApple.png";
import EightApple from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/AppleImages/eightApple.png";
import NineApple from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/AppleImages/nineApple.png";
import TenApple from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/AppleImages/tenApple.png";

import OneOrange from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/OrangeImages/oneOrange.png";
import TwoOrange from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/OrangeImages/twoOrange.png";
import ThreeOrange from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/OrangeImages/threeOrange.png";
import FourOrange from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/OrangeImages/fourOrange.png";
import FiveOrange from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/OrangeImages/fiveOrange.png";
import SixOrange from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/OrangeImages/sixOrange.png";
import SevenOrange from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/OrangeImages/sevenOrange.png";
import EightOrange from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/OrangeImages/eightOrange.png";
import NineOrange from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/OrangeImages/nineOrange.png";
import TenOrange from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/OrangeImages/tenOrange.png";

import OneBanana from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/BananaImages/oneBanana.png";
import TwoBanana from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/BananaImages/twoBanana.png";
import ThreeBanana from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/BananaImages/threeBanana.png";
import FourBanana from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/BananaImages/fourBanana.png";
import FiveBanana from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/BananaImages/fiveBanana.png";
import SixBanana from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/BananaImages/sixBanana.png";
import SevenBanana from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/BananaImages/sevenBanana.png";
import EightBanana from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/BananaImages/eightBanana.png";
import NineBanana from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/BananaImages/nineBanana.png";
import TenBanana from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/BananaImages/tenBanana.png";

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

const GamePageChallenge1 = () => {
  const [num, setNum] = React.useState(1);
  const [ready, setReady] = React.useState(true);
  const [img, setImg] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [userFruit, setUserFruit] = useGlobalState("game1Fruit");
  const [finishModal, setFinishModal] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  const [toSPG, setToSPG] = React.useState(false);

  const { width, height } = useWindowSize();

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
  }

  const AppleImages = [
    OneApple,
    TwoApple,
    ThreeApple,
    FourApple,
    FiveApple,
    SixApple,
    SevenApple,
    EightApple,
    NineApple,
    TenApple,
  ];

  const OrangeImages = [
    OneOrange,
    TwoOrange,
    ThreeOrange,
    FourOrange,
    FiveOrange,
    SixOrange,
    SevenOrange,
    EightOrange,
    NineOrange,
    TenOrange,
  ];

  const BananaImages = [
    OneBanana,
    TwoBanana,
    ThreeBanana,
    FourBanana,
    FiveBanana,
    SixBanana,
    SevenBanana,
    EightBanana,
    NineBanana,
    TenBanana,
  ];

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

  const startGame = () => {
    randomNumGen();
    setReady(false);
  };

  const finishGame = () => {
    setFinishModal(false);
    setToSPG(true);
  };

  const randomNumGen = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setNum(randomNum);
    if (userFruit == "apple") {
      setImg(AppleImages[randomNum - 1]);
    } else if (userFruit == "orange") {
      setImg(OrangeImages[randomNum - 1]);
    } else if (userFruit == "banana") {
      setImg(BananaImages[randomNum - 1]);
    }
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
      setFinishModal(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="game1-gamepagechallenge">
        <Confetti
          width={width}
          height={height}
          run={finishModal}
        />
        <Button
          variant="contained"
          color="black"
          size="large"
          sx={{ position: "absolute", top: 110, left: 50 }}
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
            <img src={img} alt="Fruit Number" />
            <Box sx={{ mt: 15 }}>
              {numbers.map((item) => (
                <Button
                  variant="contained"
                  color="black"
                  size="large"
                  sx={{ mr: 5, fontSize: 22 }}
                  onClick={() => verify(item.id)}
                >
                  {item.number}
                </Button>
              ))}
            </Box>
            {buttonClicked ? (
              answerCorrect ? (
                <Typography sx={{ mt: 5, mb: 5 }}>👏 Good Job! 👏</Typography>
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
        open={finishModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textAlign: "center",
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
          }}
        >
          <h1>Congratulations!</h1>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You finished this game!
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Now you know how to count numbers with your fingers!
          </Typography>
          <Button
            variant="contained"
            color="black"
            size="large"
            sx={{ mb: 2, mt: 3 }}
            onClick={finishGame}
          >
            Finish
          </Button>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default GamePageChallenge1;
