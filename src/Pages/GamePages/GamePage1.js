import React from "react";
import "../../CSSFiles/Game1.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../../GlobalState.js";

import FingerOne from "../../images/fingerOne.png";
import FingerTwo from "../../images/fingerTwo.png";
import FingerThree from "../../images/fingerThree.png";
import FingerFour from "../../images/fingerFour.png";
import FingerFive from "../../images/fingerFive.png";
import FingerSix from "../../images/fingerSix.png";
import FingerSeven from "../../images/fingerSeven.png";
import FingerEight from "../../images/fingerEight.png";
import FingerNine from "../../images/fingerNine.png";
import FingerTen from "../../images/fingerTen.png";

import AppleIcon from "../../images/appleicon.png";
import OrangeIcon from "../../images/orangeicon.png";
import BananaIcon from "../../images/bananaicon.png";

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
  width: { xs: "90%", sm: 400 },
  borderRadius: 4,
  boxShadow: 24,
  overflow: "hidden",
};

const GamePage1 = () => {
  const [num, setNum] = React.useState(1);
  const [ready, setReady] = React.useState(true);
  const [img, setImg] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [challengeModal, setChallengeModal] = React.useState(false);
  const [, setFruit] = useGlobalState("game1Fruit");
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [mode] = useGlobalState("darkMode");
  const [quitModal, setQuitModal] = React.useState(false);

  const [toChallenge, setToChallenge] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);

  if (toChallenge) return <Navigate to="/gamepagechallenge1" />;
  if (toSPG) return <Navigate to="/single-player-games" />;

  const images = [
    FingerOne, FingerTwo, FingerThree, FingerFour, FingerFive,
    FingerSix, FingerSeven, FingerEight, FingerNine, FingerTen,
  ];

  const startGame = () => { randomNumGen(); setReady(false); };

  const randomNumGen = () => {
    let randomNum;
    do { randomNum = Math.floor(Math.random() * 10) + 1; } while (randomNum === num);
    setNum(randomNum);
    setImg(images[randomNum - 1]);
  };

  const verify = (buttonId) => {
    isButtonClicked(true);
    if (num == buttonId) {
      const newCount = count + 1;
      setCount(newCount);
      isAnswerCorrect(true);
      if (newCount >= 10) {
        setChallengeModal(true);
      } else {
        randomNumGen();
      }
    } else {
      isAnswerCorrect(false);
    }
  };

  const nextGameApple = () => { setFruit("apple"); setChallengeModal(false); setToChallenge(true); };
  const nextGameOrange = () => { setFruit("orange"); setChallengeModal(false); setToChallenge(true); };
  const nextGameBanana = () => { setFruit("banana"); setChallengeModal(false); setToChallenge(true); };

  const numbers = [1,2,3,4,5,6,7,8,9,10].map((n) => ({ id: n, number: String(n) }));

  const darkBtnSx = mode === "dark"
    ? { backgroundColor: "#00ff9d", color: "#000000" }
    : { backgroundColor: "#000000", color: "#00ff9d" };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="game1-gamepage"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
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
              What is the number of fingers shown by the hand(s)? Press the correct button below.
            </Typography>
            <Box sx={{ mt: 3, width: "min(400px, 80vw)", height: "clamp(200px, 35vw, 360px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={img}
                alt="Finger Number"
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

      {/* Challenge unlocked modal */}
      <Modal open={challengeModal}>
        <Box sx={modalBox}>
          <Box sx={modalHeaderBox}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000" }}>Congratulations!</Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 4, py: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
            <Typography variant="h6" sx={{ color: mode === "dark" ? "#eee" : "#222", textAlign: "center" }}>
              You finished this section!
            </Typography>
            <Typography sx={{ color: mode === "dark" ? "#aaa" : "#555", textAlign: "center" }}>
              Pick a fruit to continue to the challenge!
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              <Button variant="contained" color="white" size="large" onClick={nextGameApple}>
                <img src={AppleIcon} alt="Apple" />
              </Button>
              <Button variant="contained" color="white" size="large" onClick={nextGameOrange}>
                <img src={OrangeIcon} alt="Orange" />
              </Button>
              <Button variant="contained" color="white" size="large" onClick={nextGameBanana}>
                <img src={BananaIcon} alt="Banana" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default GamePage1;
