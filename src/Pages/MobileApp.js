import React from "react";
import "../CSSFiles/MobileApp.css";
import ChatBot from "./ChatBot";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NavBar from "./NavBar";
import { useGlobalState } from "../GlobalState";

import MobileAppSS from "../images/MobileApp.jpg";

const theme = createTheme({
  palette: {
    seaGreen: {
      main: "#6bffc6",
      light: "#6bffc6",
      dark: "#0fd98b",
      contrastText: "#0d3023",
    },
    black: {
      main: "#000000",
      contrastText: "#00ff9d",
    },
  },
});

const MobileApp = () => {
  const [mode] = useGlobalState("darkMode");

  return (
    <ThemeProvider theme={theme}>
      <div
        className="mobileapp-page"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <NavBar />
        <Typography
          style={{
            marginTop: "15vh",
            marginBottom: "10vh",
            fontSize: "2vw",
            fontWeight: "bold",
          }}
        >
          The LearnCulia Mobile Application!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "85%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            src={MobileAppSS}
            style={{
              marginTop: "5vh",
              borderRadius: 16,
              width: "70vh",
              height: "70vh",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30vw",
              marginLeft: "10vw",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.5vh",
                fontWeight: "bold",
                marginBottom: "5vh",
                textAlign: "center",
              }}
            >
              Download our mobile application today to have the games right in
              your hands (iOS Only):
            </Typography>
            <Link
              href="https://apps.apple.com/us/app/learnculia/id6467522608"
              color="seaGreen.dark"
              sx={{ fontSize: "2.5vh", textAlign: "center" }}
            >
              View and Download on App Store.
            </Link>
          </Box>
        </Box>
        <Footer mode={mode} />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
};

export default MobileApp;
