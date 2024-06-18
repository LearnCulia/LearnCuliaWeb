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

const GamePageChallenge5 = () => {
  const [num1, setNum1] = React.useState(1);
  const [num2, setNum2] = React.useState(1);
  const [compSign, setCompSign] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [ready, setReady] = React.useState(true);
  const [problemSign, setProblemSign] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [helpCount, setHelpCount] = React.useState(1);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [finishModal, setFinishModal] = React.useState(false);
  const [tickMarkModal, setTickMarkModal] = React.useState(false);
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [marks, setMarks] = React.useState([]);
  const [marks2, setMarks2] = React.useState([]);
  const markAdd = 1;
  const markAdd2 = 1;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const [toSPG, setToSPG] = React.useState(false);

  const { width, height } = useWindowSize();

  const options = ["True", "False"];

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
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

  const generateNumbers = () => {
    const randomNum = Math.floor(Math.random() * 10) + 0;
    const randomNum2 = Math.floor(Math.random() * 10) + 0;
    const randomCompSign = Math.floor(Math.random() * 5) + 1;

    if (randomCompSign == 1) {
      setCompSign(">");
    } else if (randomCompSign == 2) {
      setCompSign("<");
    } else if (randomCompSign == 3) {
      setCompSign("≥");
    } else if (randomCompSign == 4) {
      setCompSign("≤");
    } else if (randomCompSign == 5) {
      setCompSign("=");
    }

    setNum1(randomNum);
    setNum2(randomNum2);
  };

  const verify = () => {
    isButtonClicked(true);
    let comparison = "";
    if (compSign === ">") {
      comparison = ">";
    } else if (compSign === "<") {
      comparison = "<";
    } else if (compSign === "≥") {
      comparison = ">=";
    } else if (compSign === "≤") {
      comparison = "<=";
    } else if (compSign === "=") {
      comparison = "==";
    }
    const stringEval = num1.toString() + comparison + num2.toString();
    if (count <= 10) {
      if (eval(stringEval) == eval(options[selectedIndex].toLowerCase())) {
        generateNumbers();
        isAnswerCorrect(true);
        setMarks([]);
        setMarks2([]);
        setSelectedIndex(-1);
        setCount(count + 1);
      } else if (
        eval(stringEval) != eval(options[selectedIndex].toLowerCase())
      ) {
        isAnswerCorrect(false);
      }
    } else if (count > 10) {
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
      <div className="game5-gamepage">
        <Confetti width={width} height={height} run={finishModal} />
        <Button
          variant="contained"
          color="black"
          size="large"
          sx={{ position: "absolute", top: 110, left: 50 }}
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
              sx={{ position: "absolute", top: 110, right: 50 }}
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
                sx={{
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
                }}
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
              open={finishModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
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
                }}
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
                  Now you know how to compare two numbers with different
                  comparison symbols!
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
              <p style={{ fontSize: 100, color: "red", marginRight: 30 }}>
                {num1}
              </p>
              <Typography style={{ fontSize: 100 }}>{compSign}</Typography>
              <p style={{ fontSize: 100, color: "blue", marginLeft: 30 }}>
                {num2}
              </p>
            </div>
            <ButtonGroup
              variant="contained"
              ref={anchorRef}
              aria-label="Button group with a nested menu"
              sx={{ mr: 5, ml: 5, height: 45 }}
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
                style={{ fontSize: 25 }}
                onClick={handleToggle}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper
              sx={{
                zIndex: 1,
                width: 100,
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
                            sx={{ fontSize: 20 }}
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
            <Button
              variant="contained"
              color="black"
              size="large"
              sx={{ mt: 20 }}
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

export default GamePageChallenge5;
