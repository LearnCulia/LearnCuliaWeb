import React from "react";
import "../CSSFiles/Contact.css";
import ChatBot from "./ChatBot";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import logo from "../images/LearnCuliaIcon.png";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useGlobalState } from "../GlobalState";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { db } from "../firebase.js";

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

const Contact = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toProfile, setToProfile] = React.useState(false);
  const [toMobileApp, setToMobileApp] = React.useState(false);

  const [sentModal, setSentModal] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const fillAnswerName = (e) => {
    setName(e.target.value);
  };

  const fillAnswerEmail = (e) => {
    setEmail(e.target.value);
  };

  const fillAnswerMessage = (e) => {
    setMessage(e.target.value);
  };

  if (toHome) {
    return <Navigate to="/home" />;
  }

  if (toInfo) {
    return <Navigate to="/info" />;
  }

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
  }

  if (toProfile) {
    return <Navigate to="/profile" />;
  }

  if (toMobileApp) {
    return <Navigate to="/mobile-app" />;
  }

  const navItems = [
    "Home",
    "Info",
    "Single Player Games",
    "Contact",
    "Profile",
    "Mobile App",
  ];

  const sendMessage = async () => {
    await db
      .collection("contactresponses")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setSentModal(true);
      })
      .catch((error) => alert(error));
  };

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
                  } else if (item === "Profile") {
                    setToProfile(true);
                  } else if (item === "Mobile App") {
                    setToMobileApp(true);
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
        className="contact-page"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <Modal
          open={sentModal}
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
              height: 350,
              width: 450,
              backgroundColor: "#c3fae5",
              border: "2px solid #000",
              borderRadius: 4,
              boxShadow: 24,
              p: 4,
            }}
          >
            <h1>Message Sent!</h1>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thank you for contacting us!
            </Typography>
            <Button
              variant="contained"
              color="black"
              size="large"
              sx={{ mt: 3 }}
              onClick={() => setSentModal(false)}
            >
              Close
            </Button>
          </Box>
        </Modal>
        <div className="contact-col1">
          <h1 style={{ marginTop: 20, fontSize: "3vw" }}>Contact</h1>
          <Typography sx={{ mt: 5, fontSize: "1vw" }}>
            Any issues or suggestions? Please contact me to get the best out of
            this website and your education!
          </Typography>
          <Typography sx={{ mt: 1, fontSize: "1vw" }}>
            Or contact
          </Typography>
          <Link
            href="mailto:learnculiaofficial@gmail.com"
            color="seaGreen.dark"
            sx={{ fontSize: 18 }}
          >
            learnculiaofficial@gmail.com.
          </Link>
          <Typography sx={{ mt: 7, fontSize: "1vw" }}>
            We will try to respond to you within 5 business days. If we do not
            respond back to your message, please email us through the link
            above. Thanks!
          </Typography>
        </div>
        <div className="contact-col2">
          <Box
            component="form"
            sx={[
              {
                "& .MuiTextField-root": { mt: "2vh", mb: "1vh", width: "50vh" },
              },
              mode === "dark"
                ? { backgroundColor: "#00ff9d" }
                : { backgroundColor: "#6bffc6" },
            ]}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <Typography style={{ color: "black", fontWeight: "bold", fontSize: "1.5vw", mt: "1vh" }}>Enter your Information Here</Typography>
            <TextField
              required
              id="outlined-required"
              label="Name"
              value={name}
              onChange={fillAnswerName}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              value={email}
              onChange={fillAnswerEmail}
            />
            <TextField
              required
              id="outlined-multiline-static"
              label="Your Message"
              value={message}
              onChange={fillAnswerMessage}
              multiline
              rows={8}
            />
            <Button
              disabled={!name || !email || !message}
              variant="contained"
              color="black"
              size="large"
              onClick={sendMessage}
              sx={{ marginTop: 3 }}
            >
              Send Message
            </Button>
          </Box>
        </div>
      </div>
      <Footer mode={mode} />
      <ChatBot />
    </ThemeProvider>
  );
};

export default Contact;
