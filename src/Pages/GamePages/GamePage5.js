import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Game5.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import ClickAwayListener from "@mui/material/ClickAwayListener";
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
});

const GamePage5 = () => {
  const [num1, setNum1] = React.useState(1);
  const [num2, setNum2] = React.useState(1);
  const [answer, setAnswer] = React.useState("");
  const [ready, setReady] = React.useState(true);
  const [problemSign, setProblemSign] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [helpCount, setHelpCount] = React.useState(1);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [challengeModal, setChallengeModal] = React.useState(false);
  const [tickMarkModal, setTickMarkModal] = React.useState(false);
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [marks, setMarks] = React.useState([]);
  const [marks2, setMarks2] = React.useState([]);
  const [mode, setMode] = useGlobalState("darkMode");
  const markAdd = 1;
  const markAdd2 = 1;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const [toSPG, setToSPG] = React.useState(false);
  const [toGamePageChallenge5, setToGamePageChallenge5] = React.useState(false);

  const options = [">", "<", "="];

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
  }

  if (toGamePageChallenge5) {
    return <Navigate to="/gamepagemid5" />;
  }

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const generateNumbers = () => {
    const randomNum = Math.floor(Math.random() * 10) + 0;
    const randomNum2 = Math.floor(Math.random() * 10) + 0;

    setNum1(randomNum);
    setNum2(randomNum2);
  };

  const verify = () => {
    let ans = "";
    isButtonClicked(true);
    if (num1 > num2) {
      ans = ">";
    } else if (num1 == num2) {
      ans = "=";
    } else if (num1 < num2) {
      ans = "<";
    }
    if (count < 10) {
      if (options[selectedIndex] === ans) {
        isAnswerCorrect(true);
        setMarks([]);
        setMarks2([]);
        setSelectedIndex(-1);
        setCount(count + 1);
        generateNumbers();
      } else if (options[selectedIndex] !== ans) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setChallengeModal(true);
    }
  };

  const startGame = () => {
    generateNumbers();
    setReady(false);
  };

  const addLine = () => {
    setMarks((prevLines) => [
      ...prevLines,
      <p
        style={{
          marginRight: 10,
          fontSize: 30,
          fontWeight: "500",
          color: "red",
        }}
      >
        |
      </p>,
    ]);
  };

  const addLine2 = () => {
    setMarks2((prevLines) => [
      ...prevLines,
      <p
        style={{
          marginRight: 10,
          fontSize: 30,
          fontWeight: "500",
          color: "blue",
        }}
      >
        |
      </p>,
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
        className="game5-gamepage"
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
                    <p style={{ color: "red" }}>Red Number ({num1}):</p>
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
                    <p style={{ color: "blue" }}>Blue Number ({num2}):</p>
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
                  Let's now use other comparisons! You got this!
                </Typography>
                <Button
                  variant="contained"
                  color="black"
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={() => setToGamePageChallenge5(true)}
                >
                  Continue
                </Button>
              </Box>
            </Modal>
            <Typography sx={{ mt: 3, fontSize: 20 }}>
              Choose the correct option!
            </Typography>
            <div
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <p style={{ fontSize: 100, color: "red" }}>{num1}</p>
              <ButtonGroup
                variant="contained"
                ref={anchorRef}
                sx={[
                  { mr: 5, ml: 5, height: 45 },
                  mode === "dark"
                    ? { backgroundColor: "#00ff9d", color: "#000000" }
                    : { backgroundColor: "#000000", color: "#00ff9d" },
                ]}
                color="black"
              >
                <Button onClick={handleClick} style={{ fontSize: 25 }}>
                  {options[selectedIndex]}
                </Button>
                <Button
                  size="small"
                  aria-controls={open ? "split-button-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-label="select comparison symbol"
                  aria-haspopup="menu"
                  sx={{ fontSize: 30 }}
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper
                sx={{
                  zIndex: 1,
                  width: 90,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                color="black"
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                    color="black"
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              selected={index === selectedIndex}
                              color="black"
                              onClick={(event) =>
                                handleMenuItemClick(event, index)
                              }
                              sx={[
                                { fontSize: 30 },
                                mode === "dark"
                                  ? {
                                      backgroundColor: "#00ff9d",
                                      color: "#000000",
                                    }
                                  : {
                                      backgroundColor: "#000000",
                                      color: "#00ff9d",
                                    },
                              ]}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              <p style={{ fontSize: 100, color: "blue" }}>{num2}</p>
            </div>
            <Button
              variant="contained"
              color="black"
              size="large"
              sx={[
                { mt: 10 },
                mode === "dark"
                  ? { backgroundColor: "#00ff9d", color: "#000000" }
                  : { backgroundColor: "#000000", color: "#00ff9d" },
              ]}
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

export default GamePage5;
