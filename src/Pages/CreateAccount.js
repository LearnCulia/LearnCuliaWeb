import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/CreateAccount.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import {
  auth,
  db,
} from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/firebase.js";
import { useGlobalState } from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/GlobalState.js";

import RegisterPic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/registerPic.png";

const TextFieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#ffffff",
          "--TextField-brandBorderHoverColor": "#ffffff",
          "--TextField-brandBorderFocusedColor": "#ffffff",
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
          color: "#ffffff",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
            color: "#ffffff",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderFocusedColor)",
            color: "#ffffff",
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
    white: {
      main: "#ffffff",
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
  const [mode, setMode] = useGlobalState("darkMode");

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
      .then(setToHome(true), isRegistered(true))
      .catch((error) => alert(error));
    setUserId(auth.currentUser.uid);
    addUserData();
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="createaccount-page"
        style={
          mode === "dark"
            ? { backgroundColor: "#242430", color: "#ffffff" }
            : { backgroundColor: "#ffffff", color: "#000000" }
        }
      >
        <h1 style={{ marginTop: 100 }}>Create a New Account Today!</h1>
        <Card
          className="CA-card"
          elevation={6}
          sx={
            mode === "dark"
              ? {
                  border: "2px solid white",
                  backgroundColor: "#242430",
                  zIndex: 1,
                  boxShadow: "2px 2px 20px 20px white",
                }
              : {}
          }
        >
          <CardContent className="CA-cardcontent">
            <Typography
              sx={[
                { fontSize: 20, mt: 5 },
                mode === "dark"
                  ? {
                      color: "#ffffff",
                    }
                  : {
                      color: "#000000",
                    },
              ]}
            >
              Register for customized profile pictures, achievements, and more!
            </Typography>
            <img
              src={RegisterPic}
              alt="Register Picture"
              className="registericon"
            />
            {mode === "dark" ? (
              <ThemeProvider theme={TextFieldTheme}>
                <TextField
                  required
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={fillAnswerEmail}
                  sx={{
                    mt: 5,
                    mb: 5,
                    width: 350,
                    input: {
                      color: "#ffffff",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "#adadad",
                    },
                  }}
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <TextField
                    required
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    variant="outlined"
                    value={password}
                    onChange={fillAnswerPassword}
                    sx={{
                      width: 350,
                      marginLeft: 3.5,
                      input: {
                        color: "#ffffff",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "#adadad",
                      },
                    }}
                  />
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{
                      height: 40,
                      marginTop: 1,
                      color: "#ffffff",
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>
              </ThemeProvider>
            ) : (
              <>
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
                    sx={{ width: 350, marginLeft: 3.5 }}
                  />
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{
                      height: 40,
                      marginTop: 1,
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>
              </>
            )}
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <Checkbox
                {...label}
                color={mode === "dark" ? "white" : "black"}
                checked={termsCO}
                onChange={() => setTermsCO(!termsCO)}
                sx={
                  mode === "dark"
                    ? {
                        color: "#ffffff",
                      }
                    : {}
                }
              />
              <Typography
                sx={[
                  { mt: 1.1 },
                  mode === "dark"
                    ? {
                        color: "#ffffff",
                      }
                    : {
                        color: "#000000",
                      },
                ]}
              >
                By registering, you confirm that you accept our Terms &
                Conditions
              </Typography>
            </div>
            <Button
              disabled={!email || !password || !termsCO}
              variant="contained"
              color="black"
              size="large"
              sx={[
                {
                  mt: 5,
                  mb: 5,
                  "&.Mui-disabled": {
                    backgroundColor: "#d4d4d4",
                    color: "#737373",
                  },
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: mode === "dark" ? "#00ff9d" : "#000000",
                  },
                },
                mode === "dark"
                  ? { backgroundColor: "#00ff9d", color: "#000000" }
                  : { backgroundColor: "#000000", color: "#00ff9d" },
              ]}
              onClick={register}
            >
              Register
            </Button>
            <Button
              variant="contained"
              color="black"
              size="large"
              sx={[
                {
                  mb: 3,
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: mode === "dark" ? "#00ff9d" : "#000000",
                  },
                },
                mode === "dark"
                  ? { backgroundColor: "#00ff9d", color: "#000000" }
                  : { backgroundColor: "#000000", color: "#00ff9d" },
              ]}
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
