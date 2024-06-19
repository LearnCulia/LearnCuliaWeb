import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/CreateAccount.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import { auth, db } from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/firebase.js";
import { useGlobalState } from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/GlobalState.js";

import RegisterPic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/registerPic.png";

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

const CreateAccount = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [guestAgree, setGuestAgree] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [termsCO, setTermsCO] = React.useState(false);
  const [registered, isRegistered] = useGlobalState("registered");
  const [userId, setUserId] = useGlobalState("userId");

  const [toHome, setToHome] = React.useState(false);
  const [toCreateAccount, setToCreateAccount] = React.useState(false);
  const [toLogin, setToLogin] = React.useState(false);

  const label = { inputProps: { "aria-label": "TOC Checkbox" } };

  if (toHome) {
    return <Navigate to="/home" />;
  }

  if (toLogin) {
    return <Navigate to="/" />;
  }

  const fillAnswerEmail = (e) => {
    setEmail(e.target.value);
  };

  const fillAnswerPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const addUserData = async () => {
    await db
      .collection("userdata")
      .add({
        email: auth.currentUser.email,
        gender: 0,
        glasses: false,
        partyHat: false,
        id: auth.currentUser.uid,
      })
      .catch((error) => alert(error));
  };

  const register = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(
         setToHome(true),
         isRegistered(true),
      )
      .catch((error) => alert(error));
    setUserId(auth.currentUser.uid);
    addUserData();
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="createaccount-page">
        <h1 style={{ marginTop: 100 }}>Create a New Account Today!</h1>
        <Card className="CA-card" elevation={6}>
          <CardContent className="CA-cardcontent">
            <Typography sx={{ fontSize: 20, mt: 5 }}>
              Register for customized profile pictures, achievements, and more!
            </Typography>
            <img
              src={RegisterPic}
              alt="Register Picture"
              className="registericon"
            />
            <TextField
              required
              label="Email"
              variant="filled"
              value={email}
              onChange={fillAnswerEmail}
              sx={{ mt: 5, mb: 5, width: 350 }}
            />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <TextField
                required
                label="Password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                variant="filled"
                value={password}
                onChange={fillAnswerPassword}
                sx={{ width: 350, marginLeft: 3 }}
              />
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{
                  height: 40,
                  marginTop: 2,
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
              <Checkbox {...label} color="black" checked={termsCO} onChange={() => setTermsCO(!termsCO)}/>
              <Typography sx={{ mt: 1.1 }}>
                By registering, you confirm that you accept our Terms &
                Conditions
              </Typography>
            </div>
            <Button
              disabled={!email || !password || !termsCO}
              variant="contained"
              color="black"
              size="large"
              sx={{ mt: 5, mb: 5 }}
              onClick={register}
            >
              Register
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

export default CreateAccount;
