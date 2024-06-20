import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/ForgotPassword.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import { auth } from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/firebase.js";
import { useGlobalState } from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/GlobalState.js";

const theme = createTheme({
  palette: {
    seaGreen: {
      main: "#00ff9d",
      light: "#6bffc6",
      dark: "#008552",
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

const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");
  const [toLogin, setToLogin] = React.useState(false);
  const [sentModal, setSentModal] = React.useState(false);

  if (toLogin) {
    return <Navigate to="/" />;
  }

  const fillAnswerEmail = (e) => {
    setEmail(e.target.value);
  };

  const forgotPass = async () => {
    try {
      await auth.sendPasswordResetEmail(email).then(() => setSentModal(true));
    } catch (e) {
      switch (e.code) {
        case "auth/invalid-email":
          alert(`Email address ${email} is invalid.`);
          break;
        default:
          alert(
            "Email not found or registered. Please go back to the login page to create a new account."
          );
          break;
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="forgotpassword-page">
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
            <h1>Email Sent!</h1>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              If you don't see the email, be sure to check in spam.
            </Typography>
            <Button
              variant="contained"
              color="black"
              size="large"
              sx={{ mt: 3 }}
              onClick={() => setToLogin(true)}
            >
              Back to Login
            </Button>
          </Box>
        </Modal>
        <h1 style={{ marginTop: 100 }}>Forgot Your Password?</h1>
        <Card className="FP-card" elevation={6}>
          <CardContent className="FP-cardcontent">
            <Typography sx={{ fontSize: 20, mt: 5 }}>
              Type in your email address so we can send you a confirmation
              email.
            </Typography>
            <TextField
              required
              label="Email"
              variant="filled"
              value={email}
              onChange={fillAnswerEmail}
              sx={{ mt: 5, mb: 5, width: 350 }}
            />
            <Button
              disabled={!email}
              variant="contained"
              color="black"
              size="large"
              sx={{ mt: 2, mb: 5 }}
              onClick={forgotPass}
            >
              Send
            </Button>
            <Button
              variant="contained"
              color="black"
              size="large"
              sx={{ mb: 3 }}
              onClick={() => setToLogin(true)}
            >
              Back to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default ForgotPassword;
