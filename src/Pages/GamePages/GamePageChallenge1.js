import React from "react";
import "../../CSSFiles/Game1.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../../GlobalState.js";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import OneApple from "../../images/AppleImages/oneApple.png";
import TwoApple from "../../images/AppleImages/twoApple.png";
import ThreeApple from "../../images/AppleImages/threeApple.png";
import FourApple from "../../images/AppleImages/fourApple.png";
import FiveApple from "../../images/AppleImages/fiveApple.png";
import SixApple from "../../images/AppleImages/sixApple.png";
import SevenApple from "../../images/AppleImages/sevenApple.png";
import EightApple from "../../images/AppleImages/eightApple.png";
import NineApple from "../../images/AppleImages/nineApple.png";
import TenApple from "../../images/AppleImages/tenApple.png";

import OneOrange from "../../images/OrangeImages/oneOrange.png";
import TwoOrange from "../../images/OrangeImages/twoOrange.png";
import ThreeOrange from "../../images/OrangeImages/threeOrange.png";
import FourOrange from "../../images/OrangeImages/fourOrange.png";
import FiveOrange from "../../images/OrangeImages/fiveOrange.png";
import SixOrange from "../../images/OrangeImages/sixOrange.png";
import SevenOrange from "../../images/OrangeImages/sevenOrange.png";
import EightOrange from "../../images/OrangeImages/eightOrange.png";
import NineOrange from "../../images/OrangeImages/nineOrange.png";
import TenOrange from "../../images/OrangeImages/tenOrange.png";

import OneBanana from "../../images/BananaImages/oneBanana.png";
import TwoBanana from "../../images/BananaImages/twoBanana.png";
import ThreeBanana from "../../images/BananaImages/threeBanana.png";
import FourBanana from "../../images/BananaImages/fourBanana.png";
import FiveBanana from "../../images/BananaImages/fiveBanana.png";
import SixBanana from "../../images/BananaImages/sixBanana.png";
import SevenBanana from "../../images/BananaImages/sevenBanana.png";
import EightBanana from "../../images/BananaImages/eightBanana.png";
import NineBanana from "../../images/BananaImages/nineBanana.png";
import TenBanana from "../../images/BananaImages/tenBanana.png";

const theme = createTheme({
  palette: {
    seaGreen: { main: "#6bffc6", light: "#6bffc6", dark: "#008552", contrastText: "#0d3023" },
    black: { main: "#000000", contrastText: "#00ff9d" },
    red: { main: "#ff1212", contrastText: "#0fff93" },
    white: { main: "#ffffff", contrastText: "#000000" },
  },
});

const modalHeaderBox = {
  width: "100%",
  backgroundColor: "#6bffc6",
  py: 2.5,
  px: 3,
  textAlign: "center",
};

const modalBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: 500 },
  borderRadius: 4,
  boxShadow: 24,
  overflow: "hidden",
};

const GamePageChallenge1 = () => {
  const [num, setNum] = React.useState(1);
  const [ready, setReady] = React.useState(true);
  const [img, setImg] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [userFruit] = useGlobalState("game1Fruit");
  const [finishModal, setFinishModal] = React.useState(false);
  const [mode] = useGlobalState("darkMode");
  const [quitModal, setQuitModal] = React.useState(false);

  const [toSPG, setToSPG] = React.useState(false);

  const { width, height } = useWindowSize();

  if (toSPG) return <Navigate to="/single-player-games" />;

  const AppleImages = [
    OneApple, TwoApple, ThreeApple, FourApple, FiveApple,
    SixApple, SevenApple, EightApple, NineApple, TenApple,
  ];
  const OrangeImages = [
    OneOrange, TwoOrange, ThreeOrange, FourOrange, FiveOrange,
    SixOrange, SevenOrange, EightOrange, NineOrange, TenOrange,
  ];
  const BananaImages = [
    OneBanana, TwoBanana, ThreeBanana, FourBanana, FiveBanana,
    SixBanana, SevenBanana, EightBanana, NineBanana, TenBanana,
  ];

  const numbers = [1,2,3,4,5,6,7,8,9,10].map((n) => ({ id: n, number: String(n) }));

  const startGame = () => { randomNumGen(); setReady(false); };
  const finishGame = () => { setFinishModal(false); setToSPG(true); };

  const randomNumGen = () => {
    let randomNum;
    do { randomNum = Math.floor(Math.random() * 10) + 1; } while (randomNum === num);
    setNum(randomNum);
    if (userFruit === "apple") setImg(AppleImages[randomNum - 1]);
    else if (userFruit === "orange") setImg(OrangeImages[randomNum - 1]);
    else if (userFruit === "banana") setImg(BananaImages[randomNum - 1]);
  };

  const verify = (buttonId) => {
    isButtonClicked(true);
    if (num === buttonId) {
      const newCount = count + 1;
      setCount(newCount);
      isAnswerCorrect(true);
      if (newCount >= 10) {
        setFinishModal(true);
      } else {
        randomNumGen();
      }
    } else {
      isAnswerCorrect(false);
    }
  };

  const darkBtnSx = mode === "dark"
    ? { backgroundColor: "#00ff9d", color: "#000000" }
    : { backgroundColor: "#000000", color: "#00ff9d" };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="game1-gamepagechallenge"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <Confetti width={width} height={height} run={finishModal} />

        <div className="quit-btn-row">
          <Button variant="contained" size="large" sx={darkBtnSx} onClick={() => setQuitModal(true)}>
            Quit Game
          </Button>
        </div>

        <h1 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)", textAlign: "center", marginTop: 0 }}>
          Let's apply the skills we learned for the following problems!
        </h1>

        {ready ? (
          <Button variant="contained" size="large" sx={darkBtnSx} onClick={startGame}>
            Press to Play
          </Button>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <Typography sx={{ textAlign: "center", fontSize: "clamp(0.85rem, 1vw, 1rem)" }}>
              What is the number shown by the fruit image? Press the correct button below.
            </Typography>
            <Box sx={{ mt: 3, width: "min(600px, 90vw)", height: "clamp(200px, 35vw, 360px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={img}
                alt="Fruit Number"
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", boxShadow: "none" }}
              />
            </Box>
            <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.5 }}>
              {numbers.map((item) => (
                <Button
                  key={item.id}
                  variant="contained"
                  size="large"
                  sx={[{ fontSize: "clamp(16px, 2vw, 22px)", minWidth: 48 }, darkBtnSx]}
                  onClick={() => verify(item.id)}
                >
                  {item.number}
                </Button>
              ))}
            </Box>
            {buttonClicked && (
              <Typography sx={{ mt: 3, mb: 3 }}>
                {answerCorrect ? "👏 Good Job! 👏" : "No pressure! Try it one more time!"}
              </Typography>
            )}
          </Box>
        )}
      </div>

      {/* Quit modal */}
      <Modal open={quitModal} onClose={() => setQuitModal(false)}>
        <Box sx={{ ...modalBox, width: { xs: "90%", sm: 360 } }}>
          <Box sx={modalHeaderBox}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>Quit Game?</Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 4, py: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <Typography sx={{ color: mode === "dark" ? "#eee" : "#222", textAlign: "center" }}>
              Are you sure you want to quit? Your progress will be lost.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained" onClick={() => setToSPG(true)} sx={{ backgroundColor: "#000", color: "#6bffc6", "&:hover": { backgroundColor: "#222" } }}>
                Yes, Quit
              </Button>
              <Button variant="outlined" onClick={() => setQuitModal(false)} sx={{ borderColor: "#000", color: mode === "dark" ? "#eee" : "#000" }}>
                Keep Playing
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* Finish modal */}
      <Modal open={finishModal}>
        <Box sx={modalBox}>
          <Box sx={modalHeaderBox}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000" }}>Congratulations!</Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 4, py: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, textAlign: "center" }}>
            <Typography variant="h6" sx={{ color: mode === "dark" ? "#eee" : "#222" }}>
              You finished this game!
            </Typography>
            <Typography sx={{ color: mode === "dark" ? "#aaa" : "#555" }}>
              Now you know how to count numbers with your fingers!
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ mt: 1, backgroundColor: "#000", color: "#6bffc6", "&:hover": { backgroundColor: "#222" } }}
              onClick={finishGame}
            >
              Finish
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default GamePageChallenge1;
