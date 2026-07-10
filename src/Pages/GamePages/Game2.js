import React from "react";
import "../../CSSFiles/Game2.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../../GlobalState.js";

const theme = createTheme({
  palette: {
    seaGreen: { main: "#6bffc6", light: "#6bffc6", dark: "#008552", contrastText: "#0d3023" },
    black: { main: "#000000", contrastText: "#00ff9d" },
  },
});

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

const Game2 = () => {
  const [mode] = useGlobalState("darkMode");
  const [toGamePage2, setToGamePage2] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [quitModal, setQuitModal] = React.useState(false);

  if (toGamePage2) return <Navigate to="/gamepage2" />;
  if (toSPG) return <Navigate to="/single-player-games" />;

  const darkBtnSx = mode === "dark"
    ? { backgroundColor: "#00ff9d", color: "#000000" }
    : { backgroundColor: "#000000", color: "#00ff9d" };

  const iframeStyle = {
    borderRadius: 20,
    width: "100%",
    maxWidth: 560,
    height: "clamp(200px, 45vw, 315px)",
    border: 0,
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="game2-page"
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

        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", textAlign: "center", marginTop: 0 }}>
          Welcome to Addition & Subtraction!
        </h1>
        <Typography sx={{ textAlign: "center" }}>
          Let's refresh our memory or learn how to add and subtract!
        </Typography>
        <Typography sx={{ textAlign: "center", mt: 0.5 }}>
          Here are some great guides to learn how to add and subtract:
        </Typography>

        <h2 style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>Easy Addition:</h2>
        <iframe
          style={iframeStyle}
          src="https://www.youtube.com/embed/rSt9iSAZT0s?si=2sjWaESK1onqQzkW"
          title="LearnCulia Youtube Easy Addition Instruction Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <h2 style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>Hard Addition:</h2>
        <iframe
          style={iframeStyle}
          src="https://www.youtube.com/embed/EsAs4xa6_tY?si=F0j0CrQ1Nc7tn8Bt"
          title="LearnCulia Youtube Hard Addition Instruction Video 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <iframe
          style={{ ...iframeStyle, marginTop: 15 }}
          src="https://www.youtube.com/embed/L2YTc3k99TE?si=TZ2dUf_xLbCOI5th"
          title="LearnCulia Youtube Hard Addition Instruction Video 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <h2 style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>Easy Subtraction:</h2>
        <iframe
          style={iframeStyle}
          src="https://www.youtube.com/embed/I9SlThGGxI4?si=iXVjYw7vO3dpgwx6"
          title="LearnCulia Youtube Easy Subtraction Instruction Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <h2 style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>Hard Subtraction:</h2>
        <iframe
          style={iframeStyle}
          src="https://www.youtube.com/embed/fSK3T0WhAS8?si=N8gtol8zMR3A1SjH"
          title="LearnCulia Youtube Hard Subtraction Instruction Video 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <iframe
          style={{ ...iframeStyle, marginTop: 15 }}
          src="https://www.youtube.com/embed/_nupRU7ZEmY?si=aqBX-b4Qn9Dd4CwP"
          title="LearnCulia Youtube Hard Subtraction Instruction Video 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <Typography sx={{ mt: 5, textAlign: "center" }}>
          Now, let's try some addition and subtraction problems by clicking the button below!
        </Typography>
        <Button
          sx={[
            { mt: 3, mb: 6, "&.MuiButtonBase-root:hover": { bgcolor: mode === "dark" ? "#00ff9d" : "#000000" } },
            darkBtnSx,
          ]}
          onClick={() => setToGamePage2(true)}
        >
          Click when you are ready!
        </Button>
      </div>

      <Modal open={quitModal} onClose={() => setQuitModal(false)}>
        <Box sx={modalBox}>
          <Box sx={{ width: "100%", backgroundColor: "#6bffc6", py: 2.5, px: 3, textAlign: "center" }}>
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
    </ThemeProvider>
  );
};

export default Game2;
