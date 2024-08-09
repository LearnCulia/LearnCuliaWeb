import React from "react";
import "../../CSSFiles/Game2.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../../GlobalState.js";

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
  },
});

const Game2 = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toGamePage2, setToGamePage2] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  if (toHome) {
    return <Navigate to="/home" />;
  }

  if (toInfo) {
    return <Navigate to="/info" />;
  }

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
  }

  if (toContact) {
    return <Navigate to="/contact" />;
  }

  if (toGamePage2) {
    return <Navigate to="/gamepage2" />;
  }

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
        className="game2-page"
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
          Go Back
        </Button>
        <h1>Welcome to Addition & Subtraction!</h1>
        <Typography>
          Let's refresh our memory or learn how to add and subtract!
        </Typography>
        <Typography>
          Here are some great guides to learn how to add and subtract:
        </Typography>
        <h2>Easy Addition:</h2>
        <iframe
          width="560"
          height="315"
          style={{ borderRadius: 20 }}
          src="https://www.youtube.com/embed/rSt9iSAZT0s?si=2sjWaESK1onqQzkW"
          title="LearnCulia Youtube Easy Addition Instruction Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <h2>Hard Addition:</h2>
        <iframe
          width="560"
          height="315"
          style={{ borderRadius: 20 }}
          src="https://www.youtube.com/embed/EsAs4xa6_tY?si=F0j0CrQ1Nc7tn8Bt"
          title="LearnCulia Youtube Hard Addition Instruction Video 1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <iframe
          width="560"
          height="315"
          style={{ borderRadius: 20, marginTop: 15 }}
          src="https://www.youtube.com/embed/L2YTc3k99TE?si=TZ2dUf_xLbCOI5th"
          title="LearnCulia Youtube Hard Addition Instruction Video 2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <h2>Easy Subtraction:</h2>
        <iframe
          width="560"
          height="315"
          style={{ borderRadius: 20 }}
          src="https://www.youtube.com/embed/I9SlThGGxI4?si=iXVjYw7vO3dpgwx6"
          title="LearnCulia Youtube Easy Subtraction Instruction Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <h2>Hard Subtraction:</h2>
        <iframe
          width="560"
          height="315"
          style={{ borderRadius: 20 }}
          src="https://www.youtube.com/embed/fSK3T0WhAS8?si=N8gtol8zMR3A1SjH"
          title="LearnCulia Youtube Easy Subtraction Instruction Video 1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <iframe
          width="560"
          height="315"
          style={{ borderRadius: 20, marginTop: 15 }}
          src="https://www.youtube.com/embed/_nupRU7ZEmY?si=aqBX-b4Qn9Dd4CwP"
          title="LearnCulia Youtube Easy Subtraction Instruction Video 2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <Typography sx={{ mt: 5 }}>
          Now, let's try some addition and subtraction problems by clicking the
          button below!
        </Typography>
        <Button
          sx={[
            {
              mt: 5,
              mb: 10,
              "&.MuiButtonBase-root:hover": {
                bgcolor: mode === "dark" ? "#00ff9d" : "#000000",
              },
            },
            mode === "dark"
              ? { backgroundColor: "#00ff9d", color: "#000000" }
              : { backgroundColor: "#000000", color: "#00ff9d" },
          ]}
          onClick={() => setToGamePage2(true)}
        >
          Click when you are ready!
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Game2;
