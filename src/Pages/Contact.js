import React from "react";
import "../CSSFiles/Contact.css";
import ChatBot from "./ChatBot";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Modal from "@mui/material/Modal";
import NavBar from "./NavBar";
import { useGlobalState } from "../GlobalState";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { db } from "../firebase.js";

const theme = createTheme({
  palette: {
    seaGreen: { main: "#6bffc6", light: "#6bffc6", dark: "#0fd98b", contrastText: "#0d3023" },
    black: { main: "#000000", contrastText: "#00ff9d" },
  },
});

const WhiteTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#000000",
          "--TextField-brandBorderHoverColor": "#000000",
          "--TextField-brandBorderFocusedColor": "#000000",
          "& label.Mui-focused": { color: "var(--TextField-brandBorderFocusedColor)" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { borderColor: "var(--TextField-brandBorderColor)" },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: { borderColor: "var(--TextField-brandBorderHoverColor)" },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: { borderColor: "var(--TextField-brandBorderFocusedColor)" },
        },
      },
    },
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

const Contact = () => {
  const [sentModal, setSentModal] = React.useState(false);
  const [mode] = useGlobalState("darkMode");

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const fillAnswerName = (e) => setName(e.target.value);
  const fillAnswerEmail = (e) => setEmail(e.target.value);
  const fillAnswerMessage = (e) => setMessage(e.target.value);

  const sendMessage = async () => {
    await db
      .collection("contactresponses")
      .add({ name, email, message })
      .then(() => setSentModal(true))
      .catch((error) => alert(error));
  };

  const darkBtnSx = mode === "dark"
    ? { backgroundColor: "#00ff9d", color: "#000000" }
    : { backgroundColor: "#000000", color: "#00ff9d" };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div
        className="contact-page"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <div className="contact-col1">
          <h1 style={{ marginTop: 20, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>Contact</h1>
          <Typography sx={{ mt: 5, fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}>
            Any issues or suggestions? Please contact me to get the best out of
            this website and your education!
          </Typography>
          <Typography sx={{ mt: 1, fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}>
            Or contact
          </Typography>
          <Link
            href="mailto:learnculiaofficial@gmail.com"
            color="seaGreen.dark"
            sx={{ fontSize: 18 }}
          >
            learnculiaofficial@gmail.com.
          </Link>
          <Typography sx={{ mt: 7, fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}>
            We will try to respond to you within 5 business days. If we do not
            respond back to your message, please email us through the link
            above. Thanks!
          </Typography>
        </div>

        <div className="contact-col2">
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { mt: "2vh", mb: "1vh", width: "min(360px, 75vw)" } }}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <Typography style={{ color: "black", fontWeight: "bold", fontSize: "clamp(1rem, 1.5vw, 1.3rem)" }}>
              Enter your Information Here
            </Typography>
            <ThemeProvider theme={WhiteTheme}>
              <TextField
                required
                label="Name"
                value={name}
                onChange={fillAnswerName}
              />
              <TextField
                required
                label="Email"
                value={email}
                onChange={fillAnswerEmail}
              />
              <TextField
                required
                label="Your Message"
                value={message}
                onChange={fillAnswerMessage}
                multiline
                rows={8}
              />
            </ThemeProvider>
            <Button
              disabled={!name || !email || !message}
              variant="contained"
              size="large"
              onClick={sendMessage}
              sx={[
                { marginTop: 3, "&.Mui-disabled": { backgroundColor: "#d4d4d4", color: "#737373" } },
                { backgroundColor: "#000", color: "#00ff9d", "&:hover": { backgroundColor: "#222" } },
              ]}
            >
              Send Message
            </Button>
          </Box>
        </div>
      </div>

      {/* Sent modal */}
      <Modal open={sentModal} onClose={() => setSentModal(false)}>
        <Box sx={modalBox}>
          <Box sx={modalHeaderBox}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000" }}>Message Sent!</Typography>
          </Box>
          <Box sx={{ width: "100%", backgroundColor: mode === "dark" ? "#1e1e2a" : "#ffffff", px: 4, py: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, textAlign: "center" }}>
            <Typography variant="h6" sx={{ color: mode === "dark" ? "#eee" : "#222" }}>
              Thank you for contacting us!
            </Typography>
            <Typography sx={{ color: mode === "dark" ? "#aaa" : "#555" }}>
              We will get back to you within 5 business days.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={[{ mt: 1 }, darkBtnSx]}
              onClick={() => setSentModal(false)}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      <Footer mode={mode} />
      <ChatBot />
    </ThemeProvider>
  );
};

export default Contact;
