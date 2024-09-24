import React from "react";
import "../../CSSFiles/Game6.css";
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

const GamePageChallenge6 = () => {
  const [numbers, setNumbers] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [ready, setReady] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [finishModal, setFinishModal] = React.useState(false);
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  const [toSPG, setToSPG] = React.useState(false);

  const { width, height } = useWindowSize();

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

  const fillAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const generateNumbers = () => {
    let numArray = [];
    for (let x = 0; x <= 4; x++) {
      let randomNum = Math.floor(Math.random() * 100) + 1;
      let randomNum2 = Math.floor(Math.random() * 100) + 1;
      numArray[x] = (randomNum / randomNum2).toFixed(2);
    }
    setNumbers(numArray.join(", "));
  };

  const verify = () => {
    isButtonClicked(true);
    let arrayNumbers = numbers.split(", ");
    let realAnswer = [...arrayNumbers].sort((a, b) => {
      return Number(a) - Number(b);
    });
    let finalAns = realAnswer.join(", ");
    if (count < 10) {
      if (answer === finalAns) {
        isAnswerCorrect(true);
        setAnswer("");
        setCount(count + 1);
        generateNumbers();
      } else if (answer !== finalAns) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setFinishModal(true);
    }
  };

  const startGame = () => {
    generateNumbers();
    setReady(false);
  };

  const finishGame = () => {
    setFinishModal(false);
    setToSPG(true);
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
        className="game6-gamepagechallenge"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <Confetti width={width} height={height} run={finishModal} />
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
            <Modal
              open={finishModal}
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
                    height: 300,
                    width: 400,
                    backgroundColor: "#c3fae5",
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
                <h1>Congratulations!</h1>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  You finished this game!
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ mt: 3 }}
                >
                  Now you know how to organize whole numbers and decimals! Good
                  job!
                </Typography>
                <Button
                  variant="contained"
                  color="black"
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={finishGame}
                >
                  Finish
                </Button>
              </Box>
            </Modal>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Type the following in the correct order!
            </Typography>
            <Typography sx={{ fontSize: 100, mt: 5 }}>{numbers}</Typography>
            {mode === "dark" ? (
              <ThemeProvider theme={WhiteTheme}>
                <TextField
                  label="Enter Answer"
                  className="input"
                  type="text"
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
                type="text"
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
        )}
      </div>
    </ThemeProvider>
  );
};

export default GamePageChallenge6;
