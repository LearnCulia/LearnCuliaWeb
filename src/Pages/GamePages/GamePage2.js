import React from "react";
import "../../CSSFiles/Game2.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../../GlobalState.js";

const theme = createTheme({
  palette: {
    seaGreen: { main: "#6bffc6", light: "#6bffc6", dark: "#008552", contrastText: "#0d3023" },
    black: { main: "#000000", contrastText: "#00ff9d" },
    red: { main: "#ff1212", contrastText: "#0fff93" },
    white: { main: "#ffffff", contrastText: "#000000" },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#000000",
          "--TextField-brandBorderHoverColor": "#000000",
          "--TextField-brandBorderFocusedColor": "#000000",
          "& label.Mui-focused": { color: "var(--TextField-brandBorderFocusedColor)" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { borderColor: "var(--TextField-brandBorderColor)" },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: { borderColor: "var(--TextField-brandBorderHoverColor)" },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: { borderColor: "var(--TextField-brandBorderFocusedColor)" },
        },
      },
    },
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
  width: { xs: "90%", sm: 400 },
  borderRadius: 4,
  boxShadow: 24,
  overflow: "hidden",
};

const GamePage2 = () => {
  const [num1, setNum1] = React.useState(1);
  const [num2, setNum2] = React.useState(1);
  const [problemSign, setProblemSign] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [ready, setReady] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [tickMarkModal, setTickMarkModal] = React.useState(false);
  const [challengeModal, setChallengeModal] = React.useState(false);
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [marks, setMarks] = React.useState([]);
  const [marks2, setMarks2] = React.useState([]);
  const [mode] = useGlobalState("darkMode");

  const [toSPG, setToSPG] = React.useState(false);
  const [toGamePageChallenge2, setToGamePageChallenge2] = React.useState(false);
  const [quitModal, setQuitModal] = React.useState(false);

  if (toSPG) return <Navigate to="/single-player-games" />;
  if (toGamePageChallenge2) return <Navigate to="/gamepagechallenge2" />;

  const darkBtnSx = mode === "dark"
    ? { backgroundColor: "#00ff9d", color: "#000000" }
    : { backgroundColor: "#000000", color: "#00ff9d" };

  const fillAnswer = (e) => setAnswer(e.target.value);

  const generateNumbers = () => {
    let n1, n2, sign;
    do {
      const r1 = Math.floor(Math.random() * 10);
      const r2 = Math.floor(Math.random() * 10);
      sign = Math.floor(Math.random() * 2) === 0 ? "+" : "–";
      n1 = sign === "–" ? Math.max(r1, r2) : r1;
      n2 = sign === "–" ? Math.min(r1, r2) : r2;
    } while (n1 === num1 && n2 === num2);
    setProblemSign(sign); setNum1(n1); setNum2(n2);
  };

  const verify = () => {
    isButtonClicked(true);
    const realAnswer = problemSign === "–" ? num1 - num2 : num1 + num2;
    if (Number(answer) == realAnswer) {
      const newCount = count + 1;
      setCount(newCount);
      isAnswerCorrect(true);
      setMarks([]); setMarks2([]); setAnswer("");
      if (newCount >= 10) {
        setChallengeModal(true);
      } else {
        generateNumbers();
      }
    } else {
      isAnswerCorrect(false);
    }
  };

  const addMark = (setter) => setter((prev) => [...prev, <Typography key={prev.length} style={{ marginRight: 10, fontSize: 30, fontWeight: "500", color: "black" }}>|</Typography>]);
  const removeMark = (setter) => setter((prev) => prev.slice(0, -1));

  const startGame = () => { generateNumbers(); setReady(false); };

  const tickMarkModalContent = (
    <Modal open={tickMarkModal}>
      <Box sx={{ ...modalBox, width: { xs: "95%", sm: 500 } }}>
        <Box sx={modalHeaderBox}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>Tick Mark Notes</Typography>
        </Box>
        <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 3, py: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography sx={{ textAlign: "center", color: mode === "dark" ? "#eee" : "#222" }}>
            Press + and – to add and remove tick marks!
          </Typography>
          {/* Row 1 */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ minWidth: 140, color: mode === "dark" ? "#eee" : "#222" }}>First Number ({num1}):</Typography>
              <Button variant="contained" size="small" sx={[{ height: 40, minWidth: 40, fontSize: 22 }, darkBtnSx]} onClick={() => addMark(setMarks)}>+</Button>
              <Button variant="contained" size="small" sx={[{ height: 40, minWidth: 40, fontSize: 22 }, darkBtnSx]} onClick={() => removeMark(setMarks)}>–</Button>
              <Button variant="contained" size="small" sx={[{ height: 40 }, darkBtnSx]} onClick={() => setMarks([])}>Clear</Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", minHeight: 40 }}>{marks}</Box>
          </Box>
          {/* Row 2 */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ minWidth: 140, color: mode === "dark" ? "#eee" : "#222" }}>Second Number ({num2}):</Typography>
              <Button variant="contained" size="small" sx={[{ height: 40, minWidth: 40, fontSize: 22 }, darkBtnSx]} onClick={() => addMark(setMarks2)}>+</Button>
              <Button variant="contained" size="small" sx={[{ height: 40, minWidth: 40, fontSize: 22 }, darkBtnSx]} onClick={() => removeMark(setMarks2)}>–</Button>
              <Button variant="contained" size="small" sx={[{ height: 40 }, darkBtnSx]} onClick={() => setMarks2([])}>Clear</Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", minHeight: 40 }}>{marks2}</Box>
          </Box>
          <Button variant="contained" size="large" sx={[{ alignSelf: "center", mt: 1 }, darkBtnSx]} onClick={() => setTickMarkModal(false)}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );

  return (
    <ThemeProvider theme={theme}>
      <div
        className="game2-gamepage"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <div className="game2-top-btns">
          <Button variant="contained" size="large" sx={darkBtnSx} onClick={() => setQuitModal(true)}>
            Quit Game
          </Button>
          {!ready && (
            <Button variant="contained" size="large" sx={darkBtnSx} onClick={() => setTickMarkModal(true)}>
              Tick Mark Notes
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
            <Typography sx={{ textAlign: "center" }}>Type in the correct sum or difference below!</Typography>
            <Box sx={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-end", mt: 1 }}>
              <Typography sx={{ fontSize: "clamp(60px, 12vw, 100px)", lineHeight: 1.1 }}>{num1}</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontSize: "clamp(60px, 12vw, 100px)", lineHeight: 1.1 }}>{problemSign}</Typography>
                <Typography sx={{ fontSize: "clamp(60px, 12vw, 100px)", lineHeight: 1.1 }}>{num2}</Typography>
              </Box>
              <section
                className="game2-bar"
                style={mode === "dark" ? { borderTop: "4px solid white" } : { borderTop: "4px solid black" }}
              />
              <Typography sx={{ fontSize: "clamp(60px, 12vw, 100px)", lineHeight: 1.1 }}>?</Typography>
            </Box>

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

      {tickMarkModalContent}

      {/* Quit modal */}
      <Modal open={quitModal} onClose={() => setQuitModal(false)}>
        <Box sx={{ ...modalBox, width: { xs: "90%", sm: 500 } }}>
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
            <Typography variant="h6" sx={{ color: mode === "dark" ? "#eee" : "#222" }}>Let's move on to the hard problems</Typography>
            <Typography sx={{ color: mode === "dark" ? "#aaa" : "#555" }}>You Got This!</Typography>
            <Button variant="contained" size="large" sx={[{ mt: 1 }, { backgroundColor: "#000", color: "#6bffc6", "&:hover": { backgroundColor: "#222" } }]} onClick={() => setToGamePageChallenge2(true)}>
              Continue
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default GamePage2;
