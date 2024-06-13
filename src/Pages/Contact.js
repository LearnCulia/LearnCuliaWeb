import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Contact.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const theme = createTheme({
  palette: {
    seaGreen: {
      main: "#6bffc6",
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

const Contact = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);

  if (toHome) {
    return <Navigate to="/home" />;
  }

  if (toInfo) {
    return <Navigate to="/info" />;
  }

  if (toSPG) {
    return <Navigate to="/single-player-games" />;
  }

  if (toContact) {
    return <Navigate to="/contact" />;
  }

  const navItems = [
    "Home",
    "Info",
    "Single Player Games",
    "Contact",
    "Profile",
  ];

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
                  } else if (item === "Contact") {
                    setToContact(true);
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <div className="contact-page">
        <h1 style={{ marginTop: 100 }}>Contact</h1>
        <Typography>
          Any issues or suggestions? Please contact me to get the best out of
          this website and your education!
        </Typography>
        <Typography>Or contact learnculiaofficial@gmail.com.</Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "50vh" },
          }}
          noValidate
          autoComplete="off"
          className="contact-form"
        >
          <TextField label="Name" className="input" />
          <TextField label="Email" className="input" />
          <TextField
            id="outlined-multiline-static"
            label="Your Message"
            multiline
            rows={8}
          />
        </Box>
        <Button variant="contained" color="black" size="large">
          Send Message
        </Button>
      </div>
      <Divider
        variant="fullWidth"
        flexItem
        sx={{ marginTop: 7, marginBottom: -47 }}
      />
      <Box className="footer">
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <img src={icon} className="footerLogo" alt="Footer LearnCulia Icon" />
          <h1>LearnCulia</h1>
        </Box>
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <Button>Info</Button>
          <Button>Single Player Games</Button>
          <Button>Contact</Button>
          <Button>Profile</Button>
        </Box>
        <p>© 2024 LearnCulia. All rights reserved.</p>
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
