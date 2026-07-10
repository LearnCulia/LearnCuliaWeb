import React from "react";
import "../../CSSFiles/Game6.css";
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

const Game6 = () => {
  const [mode] = useGlobalState("darkMode");
  const [toGamePage6, setToGamePage6] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [quitModal, setQuitModal] = React.useState(false);

  if (toGamePage6) return <Navigate to="/gamepage6" />;
  if (toSPG) return <Navigate to="/single-player-games" />;

  const darkBtnSx = mode === "dark"
    ? { backgroundColor: "#00ff9d", color: "#000000" }
    : { backgroundColor: "#000000", color: "#00ff9d" };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="game6-page"
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
          Welcome to Arranging Numbers!
        </h1>
        <Typography sx={{ textAlign: "center" }}>
          Let's refresh our memory or learn about how to organize and arrange numbers!
        </Typography>
        <Typography sx={{ mt: 2, textAlign: "center" }}>Click the video below to watch!</Typography>

        <Box sx={{ width: "100%", maxWidth: 560, mt: 2 }}>
          <iframe
            style={{ borderRadius: 20, width: "100%", height: "clamp(200px, 45vw, 315px)", border: 0 }}
            src="https://www.youtube.com/embed/3KJvGsBQ4jc?si=bNKeBu_TCJkSeLIM"
            title="LearnCulia Youtube Organizing Numbers Instruction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Box>

        <Typography sx={{ mt: 4, textAlign: "center" }}>
          Now, let's try some problems by clicking the button below!
        </Typography>
        <Button
          sx={[
            { mt: 3, mb: 3, "&.MuiButtonBase-root:hover": { bgcolor: mode === "dark" ? "#00ff9d" : "#000000" } },
            darkBtnSx,
          ]}
          onClick={() => setToGamePage6(true)}
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
              <Button variant="contained" onClick={() => setToSPG(true)} sx={{ backgroundColor: "#000", color: "#6bffc6", "&:hover": { backgroundColor: "#222" } }}>Yes, Quit</Button>
              <Button variant="outlined" onClick={() => setQuitModal(false)} sx={{ borderColor: "#000", color: mode === "dark" ? "#eee" : "#000" }}>Keep Playing</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default Game6;
