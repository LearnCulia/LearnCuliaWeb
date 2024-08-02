import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/SinglePlayerGames.css";
import ChatBot from "./ChatBot";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../GlobalState";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Game1Img from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/game1PicSPG.jpg";
import Game2Img from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/game2PicSPG.png";
import Game3Img from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/game3PicSPG.jpg";
import Game4Img from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/game4PicSPG.jpg";
import Game5Img from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/game5PicSPG.jpg";
import Game6Img from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/game6PicSPG.jpg";

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

const SinglePlayerGames = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toProfile, setToProfile] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  const [modalGame1, openModalGame1] = React.useState(false);
  const [modalGame2, openModalGame2] = React.useState(false);
  const [modalGame3, openModalGame3] = React.useState(false);
  const [modalGame4, openModalGame4] = React.useState(false);
  const [modalGame5, openModalGame5] = React.useState(false);
  const [modalGame6, openModalGame6] = React.useState(false);

  const [toGame1, setToGame1] = React.useState(false);
  const [toGame2, setToGame2] = React.useState(false);
  const [toGame3, setToGame3] = React.useState(false);
  const [toGame4, setToGame4] = React.useState(false);
  const [toGame5, setToGame5] = React.useState(false);
  const [toGame6, setToGame6] = React.useState(false);

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

  if (toProfile) {
    return <Navigate to="/profile" />;
  }

  if (toGame1) {
    return <Navigate to="/game1" />;
  }

  if (toGame2) {
    return <Navigate to="/game2" />;
  }

  if (toGame3) {
    return <Navigate to="/game3" />;
  }

  if (toGame4) {
    return <Navigate to="/game4" />;
  }

  if (toGame5) {
    return <Navigate to="/game5" />;
  }

  if (toGame6) {
    return <Navigate to="/game6" />;
  }

  const gamesRow1 = [
    {
      name: "Counting",
      description: "Start with the basics",
      image: Game1Img,
      style: {
        width: 350,
        height: 230,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame1,
      modalDesc: "Counting is for awesome people",
      openModal: () => openModalGame1(true),
      closeModal: () => openModalGame1(false),
      startGame: () => setToGame1(true),
    },
    {
      name: "Addition & Subtraction",
      description: "Let's start doing some math!",
      image: Game2Img,
      style: {
        width: 350,
        height: 230,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame2,
      modalDesc: "Additional & Subtraction is for awesomer people",
      openModal: () => openModalGame2(true),
      closeModal: () => openModalGame2(false),
      startGame: () => setToGame2(true),
    },
    {
      name: "Multiplication",
      description: "Getting more complex, but you got this!",
      image: Game3Img,
      style: {
        width: 350,
        height: 230,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame3,
      modalDesc: "Multiplication is for awesomest people",
      openModal: () => openModalGame3(true),
      closeModal: () => openModalGame3(false),
      startGame: () => setToGame3(true),
    },
  ];

  const gamesRow2 = [
    {
      name: "Reversing Math Equations",
      description: "Switching it up",
      image: Game4Img,
      style: {
        width: 370,
        height: 230,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame4,
      modalDesc: "Reversing Math Equations is for awesomest people",
      openModal: () => openModalGame4(true),
      closeModal: () => openModalGame4(false),
      startGame: () => setToGame4(true),
    },
    {
      name: "Comparisons",
      description: "Some thinking with this one",
      image: Game5Img,
      style: {
        width: 370,
        height: 230,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame5,
      modalDesc: "Comparisons is for awesomest people",
      openModal: () => openModalGame5(true),
      closeModal: () => openModalGame5(false),
      startGame: () => setToGame5(true),
    },
    {
      name: "Arranging Numbers",
      description: "Ooh a little fun here",
      image: Game6Img,
      style: {
        width: 370,
        height: 230,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame6,
      modalDesc: "Arranging Numbers is for awesomest people",
      openModal: () => openModalGame6(true),
      closeModal: () => openModalGame6(false),
      startGame: () => setToGame6(true),
    },
  ];

  const navItems = [
    "Home",
    "Info",
    "Single Player Games",
    "Contact",
    "Profile",
  ];

  return (
    <ThemeProvider theme={theme}>
      <AppBar component="nav" color="seaGreen">
        <Toolbar>
          <img src={logo} className="navLogo" alt="LearnCuliaLogo" />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            LearnCulia
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#000" }}
                onClick={() => {
                  if (item === "Home") {
                    setToHome(true);
                  } else if (item === "Info") {
                    setToInfo(true);
                  } else if (item === "Single Player Games") {
                    setToSPG(true);
                  } else if (item === "Contact") {
                    setToContact(true);
                  } else if (item === "Profile") {
                    setToProfile(true);
                  }
                }}
              >
                {item}
              </Button>
            ))}
            <IconButton
              sx={{ ml: 1 }}
              onClick={() =>
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
              }
              color="black"
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <div
        className="spg-page"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <h1 style={{ marginTop: 140 }}>Single Player Games</h1>
        <Typography>What do you want to work on today?</Typography>
        <Box className="spgRow1">
          {gamesRow1.map((item) => (
            <Card
              sx={[
                {
                  marginTop: 70,
                  marginRight: 15,
                  marginBottom: 15,
                  height: 500,
                  width: 500,
                  borderRadius: 8,
                },
                mode === "dark"
                  ? { backgroundColor: "#00ff9d" }
                  : { backgroundColor: "#c3fae5" },
              ]}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{ fontSize: 30, fontWeight: "bold", marginTop: 1 }}
                  color="black"
                >
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: 15 }} color="black">
                  {item.description}
                </Typography>
                <img src={item.image} alt="Game Image" style={item.style} />
                <Button
                  sx={{ position: "absolute", bottom: 0 }}
                  onClick={item.openModal}
                >
                  Click to Learn More
                </Button>
                <Modal
                  open={item.modal}
                  onClose={item.closeModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={[
                      {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        height: 200,
                        width: 400,
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
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Game Information:
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      {item.modalDesc}
                    </Typography>
                    <Button
                      variant="contained"
                      color="black"
                      size="large"
                      sx={{ mb: 2 }}
                      onClick={item.startGame}
                    >
                      Start Game
                    </Button>
                    <Button onClick={item.closeModal}>Close</Button>
                  </Box>
                </Modal>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box
          className="spgRow2"
          style={
            mode === "dark"
              ? { backgroundColor: "#242430", color: "#ffffff" }
              : { backgroundColor: "#ffffff", color: "#000000" }
          }
        >
          {gamesRow2.map((item) => (
            <Card
              sx={[
                {
                  marginTop: 70,
                  marginRight: 15,
                  marginBottom: 15,
                  height: 500,
                  width: 500,
                  borderRadius: 8,
                },
                mode === "dark"
                  ? { backgroundColor: "#00ff9d" }
                  : { backgroundColor: "#c3fae5" },
              ]}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{ fontSize: 30, fontWeight: "bold", marginTop: 1 }}
                  color="black"
                >
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: 15 }} color="black">
                  {item.description}
                </Typography>
                <img src={item.image} alt="Game Image" style={item.style} />
                <Button
                  sx={{ position: "absolute", bottom: 0 }}
                  onClick={item.openModal}
                >
                  Click to Learn More
                </Button>
                <Modal
                  open={item.modal}
                  onClose={item.closeModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={[
                      {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        height: 200,
                        width: 400,
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
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Game Information:
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      {item.modalDesc}
                    </Typography>
                    <Button
                      variant="contained"
                      color="black"
                      size="large"
                      sx={{ mb: 2 }}
                      onClick={item.startGame}
                    >
                      Start Game
                    </Button>
                    <Button onClick={item.closeModal}>Close</Button>
                  </Box>
                </Modal>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
      <Box
        sx={[
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" },
          { height: 455 },
        ]}
      >
        {" "}
      </Box>
      <Divider
        variant="fullWidth"
        flexItem
        sx={[
          mode === "dark"
            ? { borderColor: "#ffffff" }
            : { borderColor: "#E0E0E0" },
          { marginTop: 1 },
        ]}
      />
      <Box
        className="footer"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <img src={icon} className="footerLogo" alt="Footer LearnCulia Icon" />
          <h1>LearnCulia</h1>
        </Box>
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <Button
            sx={[mode === "dark" ? { color: "#2491FF" } : { color: "#1A70C6" }]}
            onClick={() => setToHome(true)}
          >
            Home
          </Button>
          <Button
            sx={[mode === "dark" ? { color: "#2491FF" } : { color: "#1A70C6" }]}
            onClick={() => setToInfo(true)}
          >
            Info
          </Button>
          <Button
            sx={[mode === "dark" ? { color: "#2491FF" } : { color: "#1A70C6" }]}
            onClick={() => setToContact(true)}
          >
            Contact
          </Button>
          <Button
            sx={[mode === "dark" ? { color: "#2491FF" } : { color: "#1A70C6" }]}
            onClick={() => setToProfile(true)}
          >
            Profile
          </Button>
        </Box>
        <p>© 2024 LearnCulia. All rights reserved.</p>
      </Box>
      <ChatBot />
    </ThemeProvider>
  );
};

export default SinglePlayerGames;
