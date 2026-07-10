import React from "react";
import "../CSSFiles/SinglePlayerGames.css";
import ChatBot from "./ChatBot";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../GlobalState";
import Modal from "@mui/material/Modal";
import Game1Img from "../images/game1PicSPG.jpg";
import Game2Img from "../images/game2PicSPG.png";
import Game3Img from "../images/game3PicSPG.jpg";
import Game4Img from "../images/game4PicSPG.jpg";
import Game5Img from "../images/game5PicSPG.jpg";
import Game6Img from "../images/game6PicSPG.jpg";

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
  const [mode] = useGlobalState("darkMode");

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
      description: "Start with the basics!",
      image: Game1Img,
      style: {
        width: 320,
        height: 200,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame1,
      modalDesc: "Learn how to count with fingers, and apply those skills to count everyday objects!",
      openModal: () => openModalGame1(true),
      closeModal: () => openModalGame1(false),
      startGame: () => setToGame1(true),
    },
    {
      name: "Addition & Subtraction",
      description: "Elementary math!",
      image: Game2Img,
      style: {
        width: 320,
        height: 200,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame2,
      modalDesc: "Learn how to add and subtract numbers one and two digit numbers using a special tick marks tool!",
      openModal: () => openModalGame2(true),
      closeModal: () => openModalGame2(false),
      startGame: () => setToGame2(true),
    },
    {
      name: "Multiplication",
      description: "Multiplication with the Multiplication table!",
      image: Game3Img,
      style: {
        width: 320,
        height: 200,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame3,
      modalDesc: "Learn how to multiply two numbers with the multiplication table, and without the multiplication table in the challenge!",
      openModal: () => openModalGame3(true),
      closeModal: () => openModalGame3(false),
      startGame: () => setToGame3(true),
    },
  ];

  const gamesRow2 = [
    {
      name: "Reversing Equations",
      description: "Reverse addition and subtraction equations!",
      image: Game4Img,
      style: {
        width: 340,
        height: 200,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame4,
      modalDesc: "Learn how to reverse math equations, and reverse them back given the reversed equations in the challenge!",
      openModal: () => openModalGame4(true),
      closeModal: () => openModalGame4(false),
      startGame: () => setToGame4(true),
    },
    {
      name: "Comparisons",
      description: "Comparisons with numbers!",
      image: Game5Img,
      style: {
        width: 340,
        height: 200,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame5,
      modalDesc: "Learn how to compare any two numbers with various comparison symbols learned throughout the game!",
      openModal: () => openModalGame5(true),
      closeModal: () => openModalGame5(false),
      startGame: () => setToGame5(true),
    },
    {
      name: "Arranging Numbers",
      description: "Arrange large numbers and decimals!",
      image: Game6Img,
      style: {
        width: 340,
        height: 200,
        marginTop: 30,
        borderRadius: 10,
        marginBottom: 90,
      },
      modal: modalGame6,
      modalDesc: "Learn how to arrange 5 large numbers or decimals given a mixed list!",
      openModal: () => openModalGame6(true),
      closeModal: () => openModalGame6(false),
      startGame: () => setToGame6(true),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
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
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          px: 4,
          py: 6,
          width: "100%",
          boxSizing: "border-box",
        }}>
          {[...gamesRow1, ...gamesRow2].map((item) => (
            <Card
              key={item.name}
              sx={[
                {
                  width: 340,
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                },
                { backgroundColor: "#6bffc6" },
              ]}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 1,
                  pb: 3,
                }}
              >
                <Typography sx={{ fontSize: 22, fontWeight: "bold", mt: 1 }} color="black">
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="black">
                  {item.description}
                </Typography>
                <img
                  src={item.image}
                  alt="Game"
                  style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10, marginTop: 8 }}
                />
                <Button sx={{ mt: 1 }} onClick={item.openModal}>
                  Click to Learn More
                </Button>
                <Modal open={item.modal} onClose={item.closeModal}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: { xs: "95%", sm: 620 },
                      borderRadius: 5,
                      boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
                      overflow: "hidden",
                    }}
                  >
                    <Box sx={{
                      width: "100%",
                      backgroundColor: "#6bffc6",
                      py: 2.5,
                      px: 3,
                      textAlign: "center",
                    }}>
                      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000" }}>
                        {item.name}
                      </Typography>
                    </Box>
                    {/* Body */}
                    <Box sx={{
                      width: "100%",
                      backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff",
                      px: 4,
                      py: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1.5,
                    }}>
                      <Typography variant="overline" sx={{ fontWeight: "bold", letterSpacing: 1.5, color: mode === "dark" ? "#6bffc6" : "#008552" }}>
                        About this game
                      </Typography>
                      <Typography sx={{ textAlign: "center", lineHeight: 1.7, color: mode === "dark" ? "#eee" : "#222", fontSize: "0.95rem" }}>
                        {item.modalDesc}
                      </Typography>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={item.startGame}
                        sx={{
                          mt: 1,
                          backgroundColor: "#000",
                          color: "#6bffc6",
                          fontWeight: "bold",
                          borderRadius: 3,
                          px: 5,
                          border: mode === "dark" ? "1px solid #fff" : "none",
                          "&:hover": { backgroundColor: "#222" },
                        }}
                      >
                        Start Game
                      </Button>
                      <Button
                        onClick={item.closeModal}
                        sx={{ color: mode === "dark" ? "#aaa" : "#555", fontSize: "0.8rem" }}
                      >
                        Close
                      </Button>
                    </Box>
                  </Box>
                </Modal>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
      <Footer mode={mode} />
      <ChatBot />
    </ThemeProvider>
  );
};

export default SinglePlayerGames;
