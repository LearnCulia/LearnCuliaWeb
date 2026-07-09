import React from "react";
import "../../CSSFiles/Game1.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Carousel from "react-material-ui-carousel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../../GlobalState.js";

import FingerOne from "../../images/FingerOneSlide.png";
import FingerTwo from "../../images/FingerTwoSlide.png";
import FingerThree from "../../images/FingerThreeSlide.png";
import FingerFour from "../../images/FingerFourSlide.png";
import FingerFive from "../../images/FingerFiveSlide.png";
import FingerSix from "../../images/FingerSixSlide.png";
import FingerSeven from "../../images/FingerSevenSlide.png";
import FingerEight from "../../images/FingerEightSlide.png";
import FingerNine from "../../images/FingerNineSlide.png";
import FingerTen from "../../images/FingerTenSlide.png";

const theme = createTheme({
  palette: {
    seaGreen: { main: "#6bffc6", light: "#6bffc6", dark: "#008552", contrastText: "#0d3023" },
    black: { main: "#000000", contrastText: "#00ff9d" },
    red: { main: "#ff1212", contrastText: "#0fff93" },
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
  width: { xs: "90%", sm: 360 },
  borderRadius: 4,
  boxShadow: 24,
  overflow: "hidden",
};

const Game1 = () => {
  const [mode] = useGlobalState("darkMode");
  const [toGamePage1, setToGamePage1] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [quitModal, setQuitModal] = React.useState(false);

  if (toGamePage1) return <Navigate to="/gamepage1" />;
  if (toSPG) return <Navigate to="/single-player-games" />;

  const imgStyle = { width: "100%", height: "clamp(200px, 40vw, 400px)", objectFit: "contain" };

  const fingerImages = [
    FingerOne, FingerTwo, FingerThree, FingerFour, FingerFive,
    FingerSix, FingerSeven, FingerEight, FingerNine, FingerTen,
  ];
  const fingerAlts = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];

  const quitBtnSx = [
    mode === "dark"
      ? { backgroundColor: "#00ff9d", color: "#000000" }
      : { backgroundColor: "#000000", color: "#00ff9d" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div
        className="game1-page"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <div className="quit-btn-row">
          <Button variant="contained" size="large" sx={quitBtnSx} onClick={() => setQuitModal(true)}>
            Quit Game
          </Button>
        </div>

        <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", textAlign: "center", marginTop: 0 }}>
          Welcome to Counting!
        </h1>
        <Typography sx={{ textAlign: "center", fontSize: "clamp(0.85rem, 1vw, 1rem)" }}>
          Take some time to memorize the images from the slideshow below. Click
          the dots below the slideshow to see the rest of it!
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "clamp(0.85rem, 1vw, 1rem)", mt: 0.5 }}>
          Note that the slides will automatically go through the slideshow if no
          action is taken.
        </Typography>
        <p style={{ color: "red", textAlign: "center", fontSize: "clamp(0.8rem, 1vw, 0.95rem)" }}>
          *Fingers might not change in the game. In this case, just click the
          correct number again!
        </p>

        <Box sx={{ width: { xs: "100%", sm: 600, md: 680 }, mt: 3 }}>
          <Carousel
            activeIndicatorIconButtonProps={{ style: { color: "#6bffc6" } }}
            autoPlay={false}
          >
            {fingerImages.map((src, i) => (
              <Box key={i} sx={{ display: "flex", justifyContent: "center" }}>
                <img src={src} alt={`Finger ${fingerAlts[i]}`} style={imgStyle} />
              </Box>
            ))}
          </Carousel>
        </Box>

        <Typography sx={{ mt: 4, textAlign: "center" }}>
          Now, let's try some problems by clicking the button below!
        </Typography>
        <Button
          sx={[
            {
              mt: 3,
              mb: 6,
              "&.MuiButtonBase-root:hover": { bgcolor: mode === "dark" ? "#00ff9d" : "#000000" },
            },
            mode === "dark"
              ? { backgroundColor: "#00ff9d", color: "#000000" }
              : { backgroundColor: "#000000", color: "#00ff9d" },
          ]}
          onClick={() => setToGamePage1(true)}
        >
          Click when you are ready!
        </Button>
      </div>

      <Modal open={quitModal} onClose={() => setQuitModal(false)}>
        <Box sx={modalBox}>
          <Box sx={{ width: "100%", backgroundColor: "#6bffc6", py: 2.5, px: 3, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
              Quit Game?
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff",
              px: 4, py: 3,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
            }}
          >
            <Typography sx={{ color: mode === "dark" ? "#eee" : "#222", textAlign: "center" }}>
              Are you sure you want to quit? Your progress will be lost.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                onClick={() => setToSPG(true)}
                sx={{ backgroundColor: "#000", color: "#6bffc6", "&:hover": { backgroundColor: "#222" } }}
              >
                Yes, Quit
              </Button>
              <Button
                variant="outlined"
                onClick={() => setQuitModal(false)}
                sx={{ borderColor: "#000", color: mode === "dark" ? "#eee" : "#000" }}
              >
                Keep Playing
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default Game1;
