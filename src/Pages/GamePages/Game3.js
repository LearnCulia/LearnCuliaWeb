import React from "react";
import "../../CSSFiles/Game3.css";
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

const Game3 = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toGamePage3, setToGamePage3] = React.useState(false);
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

  if (toGamePage3) {
    return <Navigate to="/gamepage3" />;
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
        className="game3-page"
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
        <h1>Welcome to Multiplication!</h1>
        <Typography>
          Let's refresh our memory or learn how to read multiplication tables to
          multiply any two numbers from 1-12!
        </Typography>
        <Typography sx={{ mt: 5, mb: 5 }}>
          Click the video below to watch!
        </Typography>
        <iframe
          width="560"
          height="315"
          style={{ borderRadius: 20 }}
          src="https://www.youtube.com/embed/DFIj8CFSIFo?si=22Spxbc793Z1l1H4"
          title="LearnCulia Youtube Multiplication with the Multiplication Table Instruction Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
        <p style={{ color: "red", marginTop: 15 }}>
          Note: Any number multiplied by 0 gives 0!
        </p>
        <Typography sx={{ mt: 5 }}>
          Now, let's try some multiplication problems by clicking the button
          below!
        </Typography>
        <Typography sx={{ mt: 5 }}>
          *Note: You can access the multiplication table on the top right corner
          if needed.
        </Typography>
        <Button
          sx={[
            {
              mt: 5,
              "&.MuiButtonBase-root:hover": {
                bgcolor: mode === "dark" ? "#00ff9d" : "#000000",
              },
            },
            mode === "dark"
              ? { backgroundColor: "#00ff9d", color: "#000000" }
              : { backgroundColor: "#000000", color: "#00ff9d" },
          ]}
          onClick={() => setToGamePage3(true)}
        >
          Click when you are ready!
        </Button>
        <Box
          sx={[
            { height: 110 },
            mode === "dark"
              ? { backgroundColor: "#242430", color: "#ffffff" }
              : { backgroundColor: "#ffffff", color: "#000000" },
          ]}
        />
      </div>
    </ThemeProvider>
  );
};

export default Game3;
