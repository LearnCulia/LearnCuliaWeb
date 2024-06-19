import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
});

const Info = () => {
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toProfile, setToProfile] = React.useState(false);

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

  if (toProfile) {
    return <Navigate to="/profile" />;
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
      <div className="info-page">
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
                    } else if (item === "Profile") {
                      setToProfile(true);
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Card
          sx={{
            marginTop: 15,
            marginBottom: 15,
            height: 300,
            width: 1300,
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 25, fontWeight: "bold" }} color="black">
              About LearnCulia
            </Typography>
            <Typography sx={{ fontSize: 15 }} component="div">
              Lorem ipsum delum hi there my name is sathvik malla andi like to
              eat bugattis and ferraris so please consider subscribing to my
              cahnel ha ha weay to go bruttha i love cars. Lorem ipsum delum hi
              there my name is sathvik malla andi like to eat bugattis and
              ferraris so please consider subscribing to my cahnel ha ha weay to
              go bruttha i love cars. Lorem ipsum delum hi there my name is
              sathvik malla andi like to eat bugattis and ferraris so please
              consider subscribing to my cahnel ha ha weay to go bruttha i love
              cars. Lorem ipsum delum hi there my name is sathvik malla andi
              like to eat bugattis and ferraris so please consider subscribing
              to my cahnel ha ha weay to go bruttha i love cars. Lorem ipsum
              delum hi there my name is sathvik malla andi like to eat bugattis
              and ferraris so please consider subscribing to my cahnel ha ha
              weay to go bruttha i love cars. Lorem ipsum delum hi there my name
              is sathvik malla andi like to eat bugattis and ferraris so please
              consider subscribing to my cahnel ha ha weay to go bruttha i love
              cars. Lorem ipsum delum hi there my name is sathvik malla andi
              like to eat bugattis and ferraris so please consider subscribing
              to my cahnel ha ha weay to go bruttha i love cars. Lorem ipsum
              delum hi there my name is sathvik malla andi like to eat bugattis
              and ferraris so please consider subscribing to my cahnel ha ha
              weay to go bruttha i love cars. Lorem ipsum delum hi there my name
              is sathvik malla andi like to eat bugattis and ferraris so please
              consider subscribing to my cahnel ha ha weay to go bruttha i love
              cars. Lorem ipsum delum hi there my name is sathvik malla andi
              like to eat bugattis and ferraris so please consider subscribing
              to my cahnel ha ha weay to go bruttha i love cars.
            </Typography>
          </CardContent>
        </Card>
        <Divider variant="fullWidth" flexItem />
        <Box className="home6">
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={icon}
              className="footerLogo"
              alt="Footer LearnCulia Icon"
            />
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
      </div>
    </ThemeProvider>
  );
};

export default Info;
