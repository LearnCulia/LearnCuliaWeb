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

import MobileAppSS from "../images/MobileApp.png";

const theme = createTheme({
  palette: {
    seaGreen: { main: "#6bffc6", light: "#6bffc6", dark: "#0fd98b", contrastText: "#0d3023" },
    black: { main: "#000000", contrastText: "#00ff9d" },
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
          sx={{
            mt: "120px",
            mb: 4,
            fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
            fontWeight: "bold",
            textAlign: "center",
            px: 2,
          }}
        >
          The LearnCulia Mobile Application!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: 1100,
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 4, md: 24 },
            px: 4,
            pb: 6,
          }}
        >
          <img
            src={MobileAppSS}
            alt="LearnCulia Mobile App"
            style={{
              borderRadius: 16,
              width: "min(460px, 90vw)",
              height: "min(460px, 90vw)",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 360,
              width: "100%",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Download our mobile application today to have the games right in
              your hands (iOS Only):
            </Typography>
            <Link
              href="https://apps.apple.com/us/app/learnculia/id6467522608"
              color="seaGreen.dark"
              sx={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", textAlign: "center" }}
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
