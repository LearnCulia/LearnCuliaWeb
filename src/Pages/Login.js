import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [guestAgree, setGuestAgree] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [registered, isRegistered] = useGlobalState("registered");
  const [toHome, setToHome] = React.useState(false);
  const [toCreateAccount, setToCreateAccount] = React.useState(false);
  const [toForgotPass, setToForgotPass] = React.useState(false);

  const fillAnswerEmail = (e) => {
    setEmail(e.target.value);
  };

  const fillAnswerPassword = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    try {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => isRegistered(true), setToHome(true), console.log(registered));
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
        </div>
        <div className="login-col2">
          <Card className="login-card" elevation={6}>
            <CardContent className="login-cardcontent">
              <h1 style={{ marginTop: 50 }}>Login Today!</h1>
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
              <Button
                disabled={!email || !password}
                variant="contained"
                color="black"
                size="large"
                sx={{ mt: 3, mb: 1 }}
                onClick={login}
              >
                Login
              </Button>
              <Button
                color="black"
                sx={{ mb: 2 }}
                onClick={() => setToForgotPass(true)}
              >
                Forgot Password?
              </Button>
              <p style={{ fontSize: 20 }}>Or create an account below:</p>
              <Button
                variant="contained"
                color="black"
                size="large"
                sx={{ mb: 3 }}
                onClick={() => setToCreateAccount(true)}
              >
                Create Account
              </Button>
              <p style={{ fontSize: 20 }}>Or login as a guest:</p>
              <Button
                variant="contained"
                color="black"
                size="large"
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
