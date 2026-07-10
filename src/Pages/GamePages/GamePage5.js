import React from "react";
import "../../CSSFiles/Game5.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
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
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../../GlobalState.js";

const theme = createTheme({
  palette: {
    seaGreen: { main: "#6bffc6", light: "#6bffc6", dark: "#008552", contrastText: "#0d3023" },
    black: { main: "#000000", contrastText: "#00ff9d" },
    red: { main: "#ff1212", contrastText: "#0fff93" },
    white: { main: "#ffffff", contrastText: "#000000" },
  },
});

const modalHeaderBox = {
  width: "100%",
  backgroundColor: "#6bffc6",
  py: 2.5,
  px: 3,
  textAlign: "center",
};

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

const GamePage5 = () => {
  const [num1, setNum1] = React.useState(1);
  const [num2, setNum2] = React.useState(1);
  const [ready, setReady] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [answerCorrect, isAnswerCorrect] = React.useState(false);
  const [challengeModal, setChallengeModal] = React.useState(false);
  const [tickMarkModal, setTickMarkModal] = React.useState(false);
  const [buttonClicked, isButtonClicked] = React.useState(false);
  const [marks, setMarks] = React.useState(0);
  const [marks2, setMarks2] = React.useState(0);
  const [mode] = useGlobalState("darkMode");

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const [toSPG, setToSPG] = React.useState(false);
  const [toGamePageChallenge5, setToGamePageChallenge5] = React.useState(false);
  const [quitModal, setQuitModal] = React.useState(false);

  const options = [">", "<", "="];

  if (toSPG) return <Navigate to="/single-player-games" />;
  if (toGamePageChallenge5) return <Navigate to="/gamepagemid5" />;

  const darkBtnSx = mode === "dark"
    ? { backgroundColor: "#00ff9d", color: "#000000" }
    : { backgroundColor: "#000000", color: "#00ff9d" };

  const handleMenuItemClick = (event, index) => { setSelectedIndex(index); setOpen(false); };
  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  const generateNumbers = () => {
    let n1, n2;
    do {
      n1 = Math.floor(Math.random() * 10);
      n2 = Math.floor(Math.random() * 10);
    } while (n1 === num1 && n2 === num2);
    setNum1(n1);
    setNum2(n2);
  };

  const verify = () => {
    isButtonClicked(true);
    let ans = num1 > num2 ? ">" : num1 < num2 ? "<" : "=";
    if (options[selectedIndex] === ans) {
      const newCount = count + 1;
      setCount(newCount);
      isAnswerCorrect(true);
      setMarks(0); setMarks2(0);
      setSelectedIndex(-1);
      if (newCount >= 10) {
        setChallengeModal(true);
      } else {
        generateNumbers();
      }
    } else {
      isAnswerCorrect(false);
    }
  };

  const startGame = () => { generateNumbers(); setReady(false); };

  const TallyMarks = ({ count, color }) => (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px", minHeight: 44, alignItems: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Box key={i} sx={{ width: 3, height: 40, borderRadius: 1 }} style={{ backgroundColor: color }} />
      ))}
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <div
        className="game5-gamepage"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <div className="game5-top-btns">
          <Button variant="contained" size="large" sx={darkBtnSx} onClick={() => setQuitModal(true)}>
            Quit Game
          </Button>
          {!ready && (
            <Button variant="contained" size="large" sx={darkBtnSx} onClick={() => setTickMarkModal(true)}>
              Tick Mark Notes
            </Button>
          )}
        </div>

        <h1 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)", textAlign: "center", marginTop: 0 }}>
          Let's apply the skills we learned for the following problems!
        </h1>

        {ready ? (
          <Button variant="contained" size="large" sx={darkBtnSx} onClick={startGame}>
            Press to Play
          </Button>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <Typography sx={{ textAlign: "center" }}>Choose the correct option!</Typography>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mt: 2, flexWrap: "wrap" }}>
              <Typography sx={{ fontSize: "clamp(60px, 12vw, 100px)", lineHeight: 1 }} style={{ color: "red" }}>{num1}</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <ButtonGroup
                  variant="contained"
                  ref={anchorRef}
                  sx={[{ height: 45, width: 120 }, darkBtnSx]}
                  color="black"
                >
                  <Button style={{ fontSize: 25, flex: 1 }}>
                    {selectedIndex >= 0 ? options[selectedIndex] : "?"}
                  </Button>
                  <Button
                    size="small"
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="menu"
                    onClick={handleToggle}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
                <Popper sx={{ zIndex: 10, width: 120 }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow {...TransitionProps} style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}>
                      <Paper sx={{ backgroundColor: mode === "dark" ? "#00ff9d" : "#000", borderRadius: 2, overflow: "hidden" }}>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu" sx={{ p: 0 }}>
                            {options.map((option, index) => (
                              <MenuItem
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(e) => handleMenuItemClick(e, index)}
                                sx={{
                                  fontSize: 28,
                                  justifyContent: "center",
                                  color: mode === "dark" ? "#000" : "#00ff9d",
                                  backgroundColor: mode === "dark" ? "#00ff9d" : "#000",
                                  "&:hover": { backgroundColor: mode === "dark" ? "#00e68a" : "#222" },
                                  "&.Mui-selected": { backgroundColor: mode === "dark" ? "#00cc7a" : "#333" },
                                  "&.Mui-selected:hover": { backgroundColor: mode === "dark" ? "#00cc7a" : "#333" },
                                }}
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
              </Box>
              <Typography sx={{ fontSize: "clamp(60px, 12vw, 100px)", lineHeight: 1 }} style={{ color: "blue" }}>{num2}</Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              sx={[
                { mt: 15, "&.Mui-disabled": { backgroundColor: "#d4d4d4", color: "#737373" }, "&.MuiButtonBase-root:hover": { bgcolor: mode === "dark" ? "#00ff9d" : "#000000" } },
                darkBtnSx,
              ]}
              disabled={selectedIndex < 0}
              onClick={verify}
            >
              Check Answer
            </Button>
            {buttonClicked && (
              <Typography sx={{ mt: 3, mb: 3 }}>
                {answerCorrect ? "👏 Good Job! 👏" : "No pressure! Try it one more time!"}
              </Typography>
            )}
          </Box>
        )}
      </div>

      {/* Tick mark modal */}
      <Modal open={tickMarkModal} onClose={() => setTickMarkModal(false)}>
        <Box sx={{ ...modalBox, width: { xs: "95%", sm: 500 } }}>
          <Box sx={modalHeaderBox}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>Tick Mark Notes</Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 3, py: 3, display: "flex", flexDirection: "column", gap: 2.5 }}>
            <Typography sx={{ textAlign: "center", color: mode === "dark" ? "#eee" : "#222" }}>
              Press + and – to add and remove tick marks!
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, p: 2, borderRadius: 2, backgroundColor: mode === "dark" ? "#2a2a38" : "#f5f5f5" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ flex: 1, fontWeight: "bold" }} style={{ color: "red" }}>Red Number ({num1}): {marks}</Typography>
                <Button variant="contained" size="small" sx={[{ height: 36, minWidth: 36, fontSize: 20 }, darkBtnSx]} onClick={() => setMarks((p) => p + 1)}>+</Button>
                <Button variant="contained" size="small" sx={[{ height: 36, minWidth: 36, fontSize: 20 }, darkBtnSx]} onClick={() => setMarks((p) => Math.max(0, p - 1))}>–</Button>
                <Button variant="contained" size="small" sx={[{ height: 36, fontSize: 12 }, darkBtnSx]} onClick={() => setMarks(0)}>Clear</Button>
              </Box>
              <TallyMarks count={marks} color="red" />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, p: 2, borderRadius: 2, backgroundColor: mode === "dark" ? "#2a2a38" : "#f5f5f5" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ flex: 1, fontWeight: "bold" }} style={{ color: "blue" }}>Blue Number ({num2}): {marks2}</Typography>
                <Button variant="contained" size="small" sx={[{ height: 36, minWidth: 36, fontSize: 20 }, darkBtnSx]} onClick={() => setMarks2((p) => p + 1)}>+</Button>
                <Button variant="contained" size="small" sx={[{ height: 36, minWidth: 36, fontSize: 20 }, darkBtnSx]} onClick={() => setMarks2((p) => Math.max(0, p - 1))}>–</Button>
                <Button variant="contained" size="small" sx={[{ height: 36, fontSize: 12 }, darkBtnSx]} onClick={() => setMarks2(0)}>Clear</Button>
              </Box>
              <TallyMarks count={marks2} color="blue" />
            </Box>
            <Button variant="contained" size="large" sx={[{ alignSelf: "center" }, darkBtnSx]} onClick={() => setTickMarkModal(false)}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Quit modal */}
      <Modal open={quitModal} onClose={() => setQuitModal(false)}>
        <Box sx={modalBox}>
          <Box sx={modalHeaderBox}>
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

      {/* Challenge modal */}
      <Modal open={challengeModal}>
        <Box sx={modalBox}>
          <Box sx={modalHeaderBox}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000" }}>Well Done!</Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 4, py: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, textAlign: "center" }}>
            <Typography variant="h6" sx={{ color: mode === "dark" ? "#eee" : "#222" }}>Let's now use other comparisons!</Typography>
            <Typography sx={{ color: mode === "dark" ? "#aaa" : "#555" }}>You got this!</Typography>
            <Button variant="contained" size="large" sx={[{ mt: 1 }, { backgroundColor: "#000", color: "#6bffc6", "&:hover": { backgroundColor: "#222" } }]} onClick={() => setToGamePageChallenge5(true)}>
              Continue
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default GamePage5;
