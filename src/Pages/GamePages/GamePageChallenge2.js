import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Game1.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/GlobalState.js";
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
});

const GamePageChallenge2 = () => {
  const [ready, setReady] = React.useState(true);
  const [num1, setNum1] = React.useState(1);
  const [num2, setNum2] = React.useState(1);
  const [problemSign, setProblemSign] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [tickMarkModal, setTickMarkModal] = React.useState(false);
  const [finishModal, setFinishModal] = React.useState(false);
  const [marks, setMarks] = React.useState([]);
  const [marks2, setMarks2] = React.useState([]);
  const [mode, setMode] = useGlobalState("darkMode");
  const markAdd = 1;
  const markAdd2 = 1;

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
    const randomNum = Math.floor(Math.random() * 100) + 0;
    const randomNum2 = Math.floor(Math.random() * 100) + 0;
    const addOrSubtract = Math.floor(Math.random() * 2) + 1;

    if (addOrSubtract == 2) {
      setProblemSign("+");
      setNum1(randomNum);
      setNum2(randomNum2);
    } else if (addOrSubtract == 1) {
      setProblemSign("–");
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
    let realAnswer = 0;
    if (problemSign === "–") {
      realAnswer = num1 - num2;
    } else {
      realAnswer = num1 + num2;
    }
    if (count < 10) {
      if (Number(answer) == realAnswer) {
        generateNumbers();
        isAnswerCorrect(true);
        setMarks([]);
        setMarks2([]);
        setAnswer("");
        setCount(count + 1);
      } else if (Number(answer) != realAnswer) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setFinishModal(true);
    }
  };

  const addLine = () => {
    setMarks((prevLines) => [
      ...prevLines,
      <Typography
        style={{
          marginRight: 10,
          fontSize: 30,
          fontWeight: "500",
          color: "black",
        }}
      >
        |
      </Typography>,
    ]);
  };

  const addLine2 = () => {
    setMarks2((prevLines) => [
      ...prevLines,
      <Typography
        style={{
          marginRight: 10,
          fontSize: 30,
          fontWeight: "500",
          color: "black",
        }}
      >
        |
      </Typography>,
    ]);
  };

  const removeLine = () => {
    setMarks((prevLines) => {
      let newLines = [...prevLines];
      newLines.splice(-markAdd);
      return newLines;
    });
  };

  const removeLine2 = () => {
    setMarks2((prevLines) => {
      let newLines = [...prevLines];
      newLines.splice(-markAdd2);
      return newLines;
    });
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
        className="game1-gamepagechallenge"
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
              onClick={() => setTickMarkModal(true)}
            >
              Open Tick Mark Notes
            </Button>
            <Modal
              open={tickMarkModal}
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
                    height: 500,
                    width: 500,
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
                <h1>
                  Press the plus and minus buttons to add and remove tick marks!
                </h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Typography>First Number ({num1}):</Typography>
                    <Button
                      variant="contained"
                      color="black"
                      size="small"
                      sx={{
                        mr: 2,
                        ml: 5,
                        height: 50,
                        width: 40,
                        fontSize: 30,
                        mt: -1.5,
                      }}
                      onClick={addLine}
                    >
                      +
                    </Button>
                    <Button
                      variant="contained"
                      color="black"
                      size="small"
                      sx={{
                        mr: 2,
                        ml: 2,
                        height: 50,
                        width: 40,
                        fontSize: 30,
                        mt: -1.5,
                      }}
                      onClick={removeLine}
                    >
                      –
                    </Button>
                    <Button
                      variant="contained"
                      color="black"
                      size="small"
                      sx={{
                        mr: 2,
                        ml: 2,
                        height: 50,
                        width: 40,
                        mt: -1.5,
                      }}
                      onClick={() => setMarks([])}
                    >
                      Clear
                    </Button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {marks}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Typography>Second Number ({num2}):</Typography>
                    <Button
                      variant="contained"
                      color="black"
                      size="small"
                      sx={{
                        mr: 2,
                        ml: 5,
                        height: 50,
                        width: 40,
                        fontSize: 30,
                        mt: -1.5,
                      }}
                      onClick={addLine2}
                    >
                      +
                    </Button>
                    <Button
                      variant="contained"
                      color="black"
                      size="small"
                      sx={{
                        mr: 2,
                        ml: 2,
                        height: 50,
                        width: 40,
                        fontSize: 30,
                        mt: -1.5,
                      }}
                      onClick={removeLine2}
                    >
                      –
                    </Button>
                    <Button
                      variant="contained"
                      color="black"
                      size="small"
                      sx={{
                        mr: 2,
                        ml: 2,
                        height: 50,
                        width: 40,
                        mt: -1.5,
                      }}
                      onClick={() => setMarks2([])}
                    >
                      Clear
                    </Button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {marks2}
                  </div>
                </div>
                <Button
                  variant="contained"
                  color="black"
                  size="large"
                  sx={{ mb: 2, mt: 3 }}
                  onClick={() => setTickMarkModal(false)}
                >
                  Close
                </Button>
              </Box>
            </Modal>
            <Typography>
              Type in the correct sum or difference below!
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Typography sx={{ fontSize: 100, mt: 2 }}>{num1}</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: 100 }}>{problemSign}</Typography>
              <Typography sx={{ fontSize: 100, ml: 5, mr: 12 }}>
                {num2}
              </Typography>
            </div>
            <section
              className="game2-bar"
              style={
                mode === "dark"
                  ? {
                      borderTop: "1vh solid white",
                    }
                  : {
                      borderTop: "1vh solid black",
                    }
              }
            ></section>
            <Typography sx={{ fontSize: 100 }}>?</Typography>
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
                sx={{ width: 350 }}
              />
            )}
            <Button
              variant="contained"
              color="black"
              size="large"
              sx={[
                {
                  mt: 5,
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
              height: 250,
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Now you know how to add and subtract one and two digit numbers!
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
    </ThemeProvider>
  );
};

export default GamePageChallenge2;
