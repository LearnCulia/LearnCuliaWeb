import React from "react";
import "../../CSSFiles/Game4.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../../GlobalState.js";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

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
  borderRadius: 4,
  boxShadow: 24,
  overflow: "hidden",
};

const GamePageChallenge4 = () => {
  const [num1, setNum1] = React.useState(1);
  const [num2, setNum2] = React.useState(1);
  const [answer, setAnswer] = React.useState("");
  const [ready, setReady] = React.useState(true);
  const [problemSign, setProblemSign] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [helpCount, setHelpCount] = React.useState(0);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [finishModal, setFinishModal] = React.useState(false);
  const [helpModal, setHelpModal] = React.useState(false);
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [mode] = useGlobalState("darkMode");

  const [toSPG, setToSPG] = React.useState(false);
  const [quitModal, setQuitModal] = React.useState(false);

  const { width, height } = useWindowSize();

  if (toSPG) return <Navigate to="/single-player-games" />;

  const darkBtnSx = mode === "dark"
    ? { backgroundColor: "#00ff9d", color: "#000000" }
    : { backgroundColor: "#000000", color: "#00ff9d" };

  const fillAnswer = (e) => setAnswer(e.target.value);

  const generateNumbers = () => {
    let n1, n2, sign;
    do {
      const r1 = Math.floor(Math.random() * 10);
      const r2 = Math.floor(Math.random() * 10);
      sign = Math.floor(Math.random() * 2) === 0 ? "+" : "-";
      n1 = sign === "-" ? Math.max(r1, r2) : r1;
      n2 = sign === "-" ? Math.min(r1, r2) : r2;
    } while (n1 === num1 && n2 === num2);
    setProblemSign(sign); setNum1(n1); setNum2(n2);
  };

  const startGame = () => { generateNumbers(); setReady(false); };
  const finishGame = () => { setFinishModal(false); setToSPG(true); };

  const verify = () => {
    isButtonClicked(true);
    const realAnswer = num1.toString() + problemSign + num2.toString() + "=?";
    if (answer === realAnswer) {
      const newCount = count + 1;
      setCount(newCount);
      isAnswerCorrect(true);
      setAnswer("");
      setHelpCount(0);
      if (newCount >= 10) {
        setFinishModal(true);
      } else {
        generateNumbers();
      }
    } else {
      isAnswerCorrect(false);
      const newHelp = helpCount + 1;
      setHelpCount(newHelp);
      if (newHelp >= 3) setHelpModal(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="game4-gamepagechallenge"
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
            <Typography sx={{ textAlign: "center", fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}>
              Write the expression shown in the reverse direction. Make sure to write the numbers in the opposite order shown.
            </Typography>
            <Typography sx={{ fontSize: "clamp(36px, 8vw, 80px)", lineHeight: 1.2, mt: 2, textAlign: "center" }}>
              ? = {num1} {problemSign} {num2}
            </Typography>

            {mode === "dark" ? (
              <ThemeProvider theme={WhiteTheme}>
                <TextField
                  label='e.g. "3+5=?"'
                  type="text"
                  value={answer}
                  onChange={fillAnswer}
                  sx={{ width: { xs: "100%", sm: 350 }, mt: 2, input: { color: "#ffffff" } }}
                  InputLabelProps={{ style: { color: "#adadad" } }}
                />
              </ThemeProvider>
            ) : (
              <TextField
                label='e.g. "3+5=?"'
                type="text"
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

      {/* Help modal */}
      <Modal open={helpModal} onClose={() => setHelpModal(false)}>
        <Box sx={modalBox}>
          <Box sx={modalHeaderBox}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>Need a hint?</Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 4, py: 3, display: "flex", flexDirection: "column", gap: 1.5, textAlign: "center" }}>
            <Typography sx={{ color: mode === "dark" ? "#eee" : "#222" }}>
              Recall from the video that <strong>a + b = ?</strong> is the same as <strong>? = a + b</strong>. This is the same for subtraction.
            </Typography>
            <Typography sx={{ color: mode === "dark" ? "#eee" : "#222" }}>
              The numbers and operation are the same — they're just swapped around.
            </Typography>
            <Typography sx={{ color: mode === "dark" ? "#aaa" : "#555" }}>
              Still struggling? Reach out via the contact page!
            </Typography>
            <Button variant="contained" size="large" sx={[{ mt: 1, alignSelf: "center" }, darkBtnSx]} onClick={() => setHelpModal(false)}>
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
              <Button variant="outlined" onClick={() => setQuitModal(false)} sx={{ borderColor: mode === "dark" ? "#eee" : "#000", color: mode === "dark" ? "#eee" : "#000" }}>Keep Playing</Button>
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
            <Typography variant="h6" sx={{ color: mode === "dark" ? "#eee" : "#222" }}>You finished this game!</Typography>
            <Typography sx={{ color: mode === "dark" ? "#aaa" : "#555" }}>
              Now you know how to read and write equations forwards and backwards!
            </Typography>
            <Button variant="contained" size="large" sx={[{ mt: 1 }, { backgroundColor: "#000", color: "#6bffc6", "&:hover": { backgroundColor: "#222" } }]} onClick={finishGame}>
              Finish
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default GamePageChallenge4;
