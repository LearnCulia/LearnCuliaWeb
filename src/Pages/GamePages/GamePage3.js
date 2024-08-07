import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Game3.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import Carousel from "react-material-ui-carousel";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/GlobalState.js";

import MultiplicationTable from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/MultiplicationTable.jpg";

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
    red: {
      main: "#ff1212",
      contrastText: "#0fff93",
    },
    white: {
      main: "#ffffff",
      contrastText: "#000000",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#000000",
          "--TextField-brandBorderHoverColor": "#000000",
          "--TextField-brandBorderFocusedColor": "#000000",
          "& label.Mui-focused": {
            color: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "var(--TextField-brandBorderColor)",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&::before, &::after": {
            borderBottom: "2px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottom: "2px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
  },
});

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
  const [mode, setMode] = useGlobalState("darkMode");

  const [toSPG, setToSPG] = React.useState(false);
  const [toGamePageChallenge3, setToGamePageChallenge3] = React.useState(false);

  const WhiteTheme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#ffffff",
            "--TextField-brandBorderHoverColor": "#ffffff",
            "--TextField-brandBorderFocusedColor": "#ffffff",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
            color: "#ffffff",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
              color: "#ffffff",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
              color: "#ffffff",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
  }

  if (toGamePageChallenge3) {
    return <Navigate to="/gamepagechallenge3" />;
  }

  const fillAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const generateNumbersMult = () => {
    const randomNum = Math.floor(Math.random() * 12) + 0;
    const randomNum2 = Math.floor(Math.random() * 12) + 0;

    setNum1(randomNum);
    setNum2(randomNum2);
  };

  const startGame = () => {
    generateNumbersMult();
    setReady(false);
  };

  const verify = () => {
    isButtonClicked(true);
    let realAnswer = num1 * num2;
    if (count < 10) {
      if (Number(answer) == realAnswer) {
        generateNumbersMult();
        isAnswerCorrect(true);
        setAnswer("");
        setCount(count + 1);
      } else if (Number(answer) != realAnswer) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setChallengeModal(true);
    }
  };

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
        className="game3-gamepage"
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
          Quit Game
        </Button>
        <h1>Let's apply the skills we learned for the following problems!</h1>
        {ready ? (
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              variant="contained"
              color="black"
              size="large"
              onClick={startGame}
              sx={
                mode === "dark"
                  ? { backgroundColor: "#00ff9d", color: "#000000" }
                  : { backgroundColor: "#000000", color: "#00ff9d" }
              }
            >
              Press to Play
            </Button>
          </div>
        ) : (
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              variant="contained"
              color="black"
              size="large"
              sx={[
                { position: "absolute", top: 110, right: 50 },
                mode === "dark"
                  ? { backgroundColor: "#00ff9d", color: "#000000" }
                  : { backgroundColor: "#000000", color: "#00ff9d" },
              ]}
              onClick={() => setTableModal(true)}
            >
              Open Multiplication Table
            </Button>
            <Modal
              open={tableModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={[
                  {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    textAlign: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    height: 600,
                    width: 600,
                    border: "2px solid #000",
                    borderRadius: 4,
                    boxShadow: 24,
                    p: 4,
                  },
                  mode === "dark"
                    ? { backgroundColor: "#00ff9d" }
                    : { backgroundColor: "#c3fae5" },
                ]}
              >
                <h1>Here is the Multiplication Table:</h1>
                <img
                  src={MultiplicationTable}
                  alt="Multiplication Table"
                  style={{ width: 450, height: 450 }}
                />
                <Button
                  variant="contained"
                  color="black"
                  size="large"
                  sx={{ mb: 2, mt: 3 }}
                  onClick={() => setTableModal(false)}
                >
                  Close
                </Button>
              </Box>
            </Modal>
            <Typography>Type in the correct answer below!</Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                textAlign: "center",
                marginTop: 50,
              }}
            >
              <Typography sx={{ fontSize: 100 }}>
                {num1} x {num2} = ?
              </Typography>
              {mode === "dark" ? (
                <ThemeProvider theme={WhiteTheme}>
                  <TextField
                    label="Enter Answer"
                    className="input"
                    id="outlined-number"
                    type="number"
                    value={answer}
                    onChange={fillAnswer}
                    sx={{
                      width: 350,
                      mt: 5,
                      input: {
                        color: "#ffffff",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "#adadad",
                      },
                    }}
                  />
                </ThemeProvider>
              ) : (
                <TextField
                  label="Enter Answer"
                  className="input"
                  id="outlined-number"
                  type="number"
                  value={answer}
                  onChange={fillAnswer}
                  sx={{ width: 350, mt: 5 }}
                />
              )}
              <Button
                variant="contained"
                color="black"
                size="large"
                sx={[
                  {
                    mt: 10,
                    "&.Mui-disabled": {
                      backgroundColor: "#d4d4d4",
                      color: "#737373",
                    },
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: mode === "dark" ? "#00ff9d" : "#000000",
                    },
                  },
                  mode === "dark"
                    ? { backgroundColor: "#00ff9d", color: "#000000" }
                    : { backgroundColor: "#000000", color: "#00ff9d" },
                ]}
                disabled={!answer}
                onClick={verify}
              >
                Check Answer
              </Button>
              {buttonClicked ? (
                answerCorrect ? (
                  <Typography sx={{ mt: 5, mb: 5 }}>👏 Good Job! 👏</Typography>
                ) : (
                  <Typography sx={{ mt: 5, mb: 5 }}>
                    No pressure! Try it one more time!
                  </Typography>
                )
              ) : (
                <Typography> </Typography>
              )}
            </div>
          </div>
        )}
      </div>
      <Modal
        open={challengeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={[
            {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              textAlign: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              height: 350,
              width: 450,
              border: "2px solid #000",
              borderRadius: 4,
              boxShadow: 24,
              p: 4,
            },
            mode === "dark"
              ? { backgroundColor: "#00ff9d" }
              : { backgroundColor: "#c3fae5" },
          ]}
        >
          <h1>Well Done!</h1>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            In the next set of questions, let's see if you can solve them
            without the multiplication table!
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You Got This!
          </Typography>
          <Button
            variant="contained"
            color="black"
            size="large"
            sx={{ mt: 3 }}
            onClick={() => setToGamePageChallenge3(true)}
          >
            Continue
          </Button>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default GamePage3;
