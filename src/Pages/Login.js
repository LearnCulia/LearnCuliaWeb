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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (guestAgree) {
    return <Navigate to="/home" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="login-page">
        <img src={logo} alt="LearnCuliaLogo" className="logoicon" />
        <p className="title">Welcome to LearnCulia!</p>
        <p>
          Login today to have custom profile pictures, achievements, and more!
        </p>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40vh" },
          }}
          noValidate
          autoComplete="off"
          className="login"
        >
          <TextField label="Email" variant="filled" className="input" />
          <div className="password">
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              variant="filled"
              className="input"
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
        </Box>
        <Button variant="contained" color="black" size="large">
          Login
        </Button>
        <p>Or create an account below:</p>
        <Button variant="contained" color="black" size="large">
          Create Account
        </Button>
        <p>Or login as a guest:</p>
        <Button variant="contained" color="black" size="large" onClick={() => setGuestAgree(true) }>
          Guest Mode
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Login;
