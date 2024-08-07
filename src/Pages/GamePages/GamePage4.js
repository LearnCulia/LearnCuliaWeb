import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Game4.css";
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

const GamePage4 = () => {
  const [num1, setNum1] = React.useState(1);
  const [num2, setNum2] = React.useState(1);
  const [answer, setAnswer] = React.useState("");
  const [ready, setReady] = React.useState(true);
  const [problemSign, setProblemSign] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [helpCount, setHelpCount] = React.useState(1);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [challengeModal, setChallengeModal] = React.useState(false);
  const [helpModal, setHelpModal] = React.useState(false);
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  const [toSPG, setToSPG] = React.useState(false);
  const [toGamePageChallenge4, setToGamePageChallenge4] = React.useState(false);

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

  if (toGamePageChallenge4) {
    return <Navigate to="/gamepagechallenge4" />;
  }

  const fillAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const generateNumbers = () => {
    const randomNum = Math.floor(Math.random() * 10) + 0;
    const randomNum2 = Math.floor(Math.random() * 10) + 0;
    const problemSign = Math.floor(Math.random() * 2) + 1;

    if (problemSign == 2) {
      setProblemSign("+");
      setNum1(randomNum);
      setNum2(randomNum2);
    } else {
      setProblemSign("-");
      if (randomNum > randomNum2) {
        setNum1(randomNum);
        setNum2(randomNum2);
      } else {
        setNum1(randomNum2);
        setNum2(randomNum);
      }
    }
  };

  const verify = () => {
    isButtonClicked(true);
    let realAnswer = "?=" + num1.toString() + problemSign + num2.toString();
    if (count < 10) {
      if (answer === realAnswer) {
        generateNumbers();
        isAnswerCorrect(true);
        setAnswer("");
        setCount(count + 1);
      } else if (answer !== realAnswer) {
        isAnswerCorrect(false);
        setHelpCount(helpCount + 1);
        if (helpCount >= 3) {
          setHelpModal(true);
        }
      }
    } else if (count == 10) {
      setChallengeModal(true);
    }
  };

  const startGame = () => {
    generateNumbers();
    setReady(false);
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
        className="game4-gamepage"
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
            <Modal
              open={helpModal}
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
                    height: 550,
                    width: 550,
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
                <h1>
                  It seems that you are struggling on this problem. Here are
                  some tips to help you out!
                </h1>
                <Typography>
                  Recall from the video that a+b=? is the same as ?=a+b. This is
                  the same for subtraction.
                </Typography>
                <Typography>
                  How? Because for both operations, they are the same operations
                  and numbers. They are just swapped.
                </Typography>
                <Typography>
                  Let me know if you are still struggling by contacting me in
                  the contact page and I can help you out!
                </Typography>
                <Button
                  variant="contained"
                  color="black"
                  size="large"
                  sx={{ mb: 2, mt: 3 }}
                  onClick={() => setHelpModal(false)}
                >
                  Close
                </Button>
              </Box>
            </Modal>
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
                  The next set of questions will just be the opposite of what
                  you did in these problems.
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  You Got This!
                </Typography>
                <Button
                  variant="contained"
                  color="black"
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={() => setToGamePageChallenge4(true)}
                >
                  Continue
                </Button>
              </Box>
            </Modal>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Write the the expression shown in the reverse direction. Make sure
              to write the numbers in the opposite order shown.
            </Typography>
            <Typography sx={{ fontSize: 100, mt: 5 }}>
              {num1} {problemSign} {num2} = ?
            </Typography>
            {mode === "dark" ? (
              <ThemeProvider theme={WhiteTheme}>
                <TextField
                  label="Enter Answer"
                  className="input"
                  id="outlined-number"
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
                id="outlined-number"
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

export default GamePage4;
