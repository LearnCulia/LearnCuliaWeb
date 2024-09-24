import React from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import logo from "../images/LearnCuliaIcon.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { auth } from "../firebase.js";
import { useGlobalState } from "../GlobalState.js";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [guestAgree, setGuestAgree] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [registered, isRegistered] = useGlobalState("registered");
  const [toHome, setToHome] = React.useState(false);
  const [toCreateAccount, setToCreateAccount] = React.useState(false);
  const [toForgotPass, setToForgotPass] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");

  const fillAnswerEmail = (e) => {
    setEmail(e.target.value);
  };

  const fillAnswerPassword = (e) => {
    setPassword(e.target.value);
  };

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
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
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
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
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
      blackWhite: {
        main: "#000000",
        contrastText: "#ffffff",
      },
      whiteBlack: {
        main: "#ffffff",
        contrastText: "#000000",
      },
    },
    button: {
      "&:disabled": {
        backgroundColor: "#d4d4d4",
        color: "#424242",
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
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
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
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

  const login = async () => {
    try {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(
          () => isRegistered(true),
          setToHome(true),
          console.log(registered)
        );
    } catch (e) {
      isRegistered(false);
      switch (e.code) {
        case "auth/email-already-in-use":
          alert(`Email address ${email} already in use.`);
          break;
        case "auth/invalid-email":
          alert(`Email address ${email} is invalid.`);
          break;
        case "auth/operation-not-allowed":
          alert(`Error during sign up.`);
          break;
        case "auth/weak-password":
          alert(
            "Password is not strong enough. Add additional characters including special characters and numbers."
          );
          break;
        default:
          alert(
            "Incorrect email or password, or user not found. Register below or type again."
          );
          break;
      }
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (guestAgree) {
    return <Navigate to="/home" />;
  }

  if (toHome) {
    return <Navigate to="/home" />;
  }

  if (toCreateAccount) {
    return <Navigate to="/create-account" />;
  }

  if (toForgotPass) {
    return <Navigate to="/forgot-password" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="login-page">
        <div className="login-col1">
          <img src={logo} alt="LearnCuliaLogo" className="logoicon" />
          <p className="title">Welcome to LearnCulia!</p>
          <p style={{ fontSize: 20 }}>
            Login today to have custom profile pictures, achievements, and more!
          </p>
          {mode === "dark" ? (
            <Button
              variant="contained"
              color="whiteBlack"
              size="large"
              sx={{ mb: 3, mt: 5 }}
              onClick={() =>
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
              }
              endIcon={<LightModeIcon />}
            >
              Light Mode
            </Button>
          ) : (
            <Button
              variant="contained"
              color="blackWhite"
              size="large"
              sx={{ mb: 3, mt: 5 }}
              onClick={() =>
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
              }
              endIcon={<DarkModeIcon />}
            >
              Dark Mode
            </Button>
          )}
        </div>
        <div
          className="login-col2"
          style={
            mode === "dark"
              ? { backgroundColor: "#242430" }
              : { backgroundColor: "#ffffff" }
          }
        >
          <Card
            className="login-card"
            elevation={6}
            sx={
              mode === "dark"
                ? {
                    border: "2px solid white",
                    backgroundColor: "#242430",
                    zIndex: 1, 
                    boxShadow: "2px 2px 20px 20px white"
                  }
                : { borderColor: "#121212" }
            }
          >
            <CardContent className="login-cardcontent">
              <h1
                style={
                  mode === "dark"
                    ? { marginTop: 50, color: "white" }
                    : { marginTop: 50, color: "black" }
                }
              >
                Login Today!
              </h1>
              {mode === "dark" ? (
                <ThemeProvider theme={TextFieldTheme}>
                  <TextField
                    required
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={fillAnswerEmail}
                    sx={{
                      mt: 3,
                      mb: 3,
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
                  <div className="password">
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
                      color="white"
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
                <div>
                  <TextField
                    required
                    label="Email"
                    variant="filled"
                    value={email}
                    onChange={fillAnswerEmail}
                    sx={{ mt: 3, mb: 3, width: 350 }}
                  />
                  <div className="password">
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
                </div>
              )}

              <Button
                disabled={!email || !password}
                variant="contained"
                color="black"
                size="large"
                sx={[
                  {
                    mt: 3,
                    mb: 1,
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
                onClick={login}
              >
                Login
              </Button>
              <Button
                color={mode === "dark" ? "white" : "black"}
                sx={{ mb: 2 }}
                onClick={() => setToForgotPass(true)}
              >
                Forgot Password?
              </Button>
              <p
                style={
                  mode === "dark"
                    ? { color: "#ffffff", fontSize: 20 }
                    : { color: "#000000", fontSize: 20 }
                }
              >
                Create an account below:
              </p>
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
                onClick={() => setToCreateAccount(true)}
              >
                Create Account
              </Button>
              <p
                style={
                  mode === "dark"
                    ? { color: "#ffffff", fontSize: 20 }
                    : { color: "#000000", fontSize: 20 }
                }
              >
                Or login as a guest:
              </p>
              <Button
                variant="contained"
                color="black"
                size="large"
                sx={[
                  {
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: mode === "dark" ? "#00ff9d" : "#000000",
                    },
                  },
                  mode === "dark"
                    ? { backgroundColor: "#00ff9d", color: "#000000" }
                    : { backgroundColor: "#000000", color: "#00ff9d" },
                ]}
                onClick={() => setGuestAgree(true)}
              >
                Guest Mode
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;