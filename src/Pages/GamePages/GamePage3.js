import React from "react";
import "../../CSSFiles/Game3.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../../GlobalState.js";

import MultiplicationTable from "./MultiplicationTable.js";

const theme = createTheme({
  palette: {
    seaGreen: { main: "#6bffc6", light: "#6bffc6", dark: "#008552", contrastText: "#0d3023" },
    black: { main: "#000000", contrastText: "#00ff9d" },
    red: { main: "#ff1212", contrastText: "#0fff93" },
    white: { main: "#ffffff", contrastText: "#000000" },
  },
});

const WhiteTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#ffffff",
          "--TextField-brandBorderHoverColor": "#ffffff",
          "--TextField-brandBorderFocusedColor": "#ffffff",
          "& label.Mui-focused": { color: "var(--TextField-brandBorderFocusedColor)" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { borderColor: "var(--TextField-brandBorderColor)", color: "#ffffff" },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: { borderColor: "var(--TextField-brandBorderHoverColor)" },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: { borderColor: "var(--TextField-brandBorderFocusedColor)" },
        },
      },
    },
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
  maxHeight: "90vh",
  borderRadius: 4,
  boxShadow: 24,
  overflow: "hidden",
};

const GamePage3 = () => {
  const [num1, setNum1] = React.useState(1);
  const [num2, setNum2] = React.useState(1);
  const [answer, setAnswer] = React.useState("");
  const [ready, setReady] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [challengeModal, setChallengeModal] = React.useState(false);
  const [tableModal, setTableModal] = React.useState(false);
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [mode] = useGlobalState("darkMode");

  const [toSPG, setToSPG] = React.useState(false);
  const [toGamePageChallenge3, setToGamePageChallenge3] = React.useState(false);
  const [quitModal, setQuitModal] = React.useState(false);

  if (toSPG) return <Navigate to="/single-player-games" />;
  if (toGamePageChallenge3) return <Navigate to="/gamepagechallenge3" />;

  const darkBtnSx = mode === "dark"
    ? { backgroundColor: "#00ff9d", color: "#000000" }
    : { backgroundColor: "#000000", color: "#00ff9d" };

  const fillAnswer = (e) => setAnswer(e.target.value);

  const generateNumbersMult = () => {
    let n1, n2;
    do {
      n1 = Math.floor(Math.random() * 13);
      n2 = Math.floor(Math.random() * 13);
    } while ((n1 === num1 && n2 === num2) || (n1 === num2 && n2 === num1));
    setNum1(n1);
    setNum2(n2);
  };

  const startGame = () => { generateNumbersMult(); setReady(false); };

  const verify = () => {
    isButtonClicked(true);
    const realAnswer = num1 * num2;
    if (Number(answer) == realAnswer) {
      const newCount = count + 1;
      setCount(newCount);
      isAnswerCorrect(true);
      setAnswer("");
      if (newCount >= 10) {
        setChallengeModal(true);
      } else {
        generateNumbersMult();
      }
    } else {
      isAnswerCorrect(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="game3-gamepage"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <div className="game3-top-btns">
          <Button variant="contained" size="large" sx={darkBtnSx} onClick={() => setQuitModal(true)}>
            Quit Game
          </Button>
          {!ready && (
            <Button variant="contained" size="large" sx={darkBtnSx} onClick={() => setTableModal(true)}>
              Multiplication Table
            </Button>
          )}
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
            <Typography sx={{ textAlign: "center" }}>Type in the correct answer below!</Typography>
            <Typography sx={{ fontSize: "clamp(48px, 10vw, 100px)", lineHeight: 1.2, mt: 2 }}>
              {num1} x {num2} = ?
            </Typography>

            {mode === "dark" ? (
              <ThemeProvider theme={WhiteTheme}>
                <TextField
                  label="Enter Answer"
                  type="number"
                  value={answer}
                  onChange={fillAnswer}
                  sx={{ width: { xs: "100%", sm: 350 }, mt: 2, input: { color: "#ffffff" } }}
                  InputLabelProps={{ style: { color: "#adadad" } }}
                />
              </ThemeProvider>
            ) : (
              <TextField
                label="Enter Answer"
                type="number"
                value={answer}
                onChange={fillAnswer}
                sx={{ width: { xs: "100%", sm: 350 }, mt: 2 }}
              />
            )}

            <Button
              variant="contained"
              size="large"
              sx={[
                { mt: 3, "&.Mui-disabled": { backgroundColor: "#d4d4d4", color: "#737373" }, "&.MuiButtonBase-root:hover": { bgcolor: mode === "dark" ? "#00ff9d" : "#000000" } },
                darkBtnSx,
              ]}
              disabled={!answer}
              onClick={verify}
            >
              Check Answer
            </Button>
            {buttonClicked && (
              <Typography sx={{ mt: 3, mb: 3 }}>
                {answerCorrect ? "👏 Good Job! 👏" : "No pressure! Try it one more time!"}
              </Typography>
            )}
          </Box>
        )}
      </div>

      <Modal open={tableModal} onClose={() => setTableModal(false)}>
        <Box sx={{ ...modalBox, width: "min(660px, 92vw)" }}>
          <Box sx={modalHeaderBox}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>Multiplication Table</Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 3, py: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, overflowY: "auto" }}>
            <MultiplicationTable />
            <Button variant="contained" size="large" sx={darkBtnSx} onClick={() => setTableModal(false)}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Quit modal */}
      <Modal open={quitModal} onClose={() => setQuitModal(false)}>
        <Box sx={modalBox}>
          <Box sx={modalHeaderBox}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>Quit Game?</Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 4, py: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <Typography sx={{ color: mode === "dark" ? "#eee" : "#222", textAlign: "center" }}>
              Are you sure you want to quit? Your progress will be lost.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained" onClick={() => setToSPG(true)} sx={{ backgroundColor: "#000", color: "#6bffc6", "&:hover": { backgroundColor: "#222" } }}>Yes, Quit</Button>
              <Button variant="outlined" onClick={() => setQuitModal(false)} sx={{ borderColor: "#000", color: mode === "dark" ? "#eee" : "#000" }}>Keep Playing</Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* Challenge unlocked modal */}
      <Modal open={challengeModal}>
        <Box sx={modalBox}>
          <Box sx={modalHeaderBox}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000" }}>Well Done!</Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 4, py: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, textAlign: "center" }}>
            <Typography variant="h6" sx={{ color: mode === "dark" ? "#eee" : "#222" }}>
              In the next set of questions, let's see if you can solve them without the multiplication table!
            </Typography>
            <Typography sx={{ color: mode === "dark" ? "#aaa" : "#555" }}>You Got This!</Typography>
            <Button variant="contained" size="large" sx={[{ mt: 1 }, { backgroundColor: "#000", color: "#6bffc6", "&:hover": { backgroundColor: "#222" } }]} onClick={() => setToGamePageChallenge3(true)}>
              Continue
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default GamePage3;
