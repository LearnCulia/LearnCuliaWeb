import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/Profile.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import ProfilePic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/profilePic.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  auth,
  db,
} from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/firebase.js";
import Divider from "@mui/material/Divider";
import { useGlobalState } from "../GlobalState";

import maleProfilePic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/maleProfPic.png";
import malePHProfilePic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/malePHProfPic.png";
import maleGlassesProfilePic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/maleGlassesProfilePic.png";
import maleGPHProfilePic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/maleGPHProfilePic.png";

import femaleProfilePic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/femaleProfilePic.png";
import femalePHProfilePic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/femalePHProfilePic.png";
import femaleGlassesProfilePic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/femaleGlassesProfilePic.png";
import femaleGPHProfilePic from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/femaleGPHProfilePic.png";

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
    blackRed: {
      main: "#000000",
      contrastText: "#fc0303",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover, &.Mui-focusVisible": { backgroundColor: "black" },
        },
      },
    },
  },
});

const Profile = () => {
  const [toLogin, setToLogin] = React.useState(false);
  const [toHome, setToHome] = React.useState(false);
  const [toInfo, setToInfo] = React.useState(false);
  const [toSPG, setToSPG] = React.useState(false);
  const [toContact, setToContact] = React.useState(false);
  const [toProfile, setToProfile] = React.useState(false);
  const [alignment, setAlignment] = React.useState("male");

  const [registered, isRegistered] = useGlobalState("registered");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [glasses, setGlasses] = React.useState(false);
  const [partyHat, setPartyHat] = React.useState(false);

  if (toLogin) {
    return <Navigate to="/" />;
  }

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

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const loadUserData = () => {
    db.collection("userdata")
      .get()
      .then(function (querySnapshot) {
        try {
          querySnapshot.forEach(function (doc) {
            if (doc.data().id == auth.currentUser.uid) {
              setSelectedIndex(doc.data().gender);
              setGlasses(doc.data().glasses);
              setPartyHat(doc.data().partyHat);
              //    setStarCount(doc.data().stars);
              throw new Error("User has been found");
            }
          });
        } catch (e) {
          console.log("User found");
        }
      });
  };

  const saveData = () => {
    db.collection("userdata")
      .get()
      .then(function (querySnapshot) {
        try {
          querySnapshot.forEach(function (doc) {
            if (doc.data().id === auth.currentUser.uid) {
              db.collection("userdata").doc(doc.id).update({
                gender: selectedIndex,
                glasses: glasses,
                partyHat: partyHat,
              });
              throw new Error("User is found and is being updated");
            }
          });
        } catch (e) {
          console.log("Updated user data");
        }
      });
  };

  // const saveButton = () => {
  //   saveData();
  //   showMessage({
  //     message: "Saved!",
  //     type: "success",
  //     titleStyle: {
  //       fontSize: 19,
  //       marginTop: 20,
  //       fontWeight: "bold",
  //       color: "black",
  //     },
  //     backgroundColor: "white",
  //     style: {
  //       alignItems: "center",
  //       alignSelf: "center",
  //       width: 450,
  //       borderTopStartRadius: 8,
  //       borderTopEndRadius: 8,
  //       overflow: "scroll",
  //     },
  //     position: "bottom",
  //   });
  // };

  const userLogout = async () => {
    await auth
      .signOut(auth)
      .then(() => {
        setToLogin(true);
        isRegistered(false);
      })
      .catch((error) => alert(error));
  };

  // React.useEffect(() => {
  //   loadUserData();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="profile-page">
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
        {registered ? (
          <div className="profile-not-logged">
            <h1>Welcome to Your Profile!</h1>
            <Typography sx={{ fontSize: 20 }}>
              Make your desired changes, and hit save below!
            </Typography>
            {glasses && partyHat ? (
              <img
                src={selectedIndex == 0 ? maleProfilePic : femaleProfilePic}
                alt="Profile Picture"
                style={{ width: 400, height: 400 }}
              />
            ) : glasses ? (
              <img
                src={selectedIndex == 0 ? malePHProfilePic : femalePHProfilePic}
                alt="Profile Picture"
                style={{ width: 400, height: 400 }}
              />
            ) : partyHat ? (
              <img
                src={
                  selectedIndex == 0
                    ? maleGlassesProfilePic
                    : femaleGlassesProfilePic
                }
                alt="Profile Picture"
                style={{ width: 400, height: 400 }}
              />
            ) : (
              <img
                src={
                  selectedIndex == 0 ? maleGPHProfilePic : femaleGPHProfilePic
                }
                alt="Profile Picture"
                style={{ width: 400, height: 400 }}
              />
            )}
            <ToggleButtonGroup
              color="black"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              sx={{ width: 400 }}
            >
              <ToggleButton value="male" sx={{ width: 200, color: "#000000" }}>
                Male
              </ToggleButton>
              <ToggleButton color="black" value="female" sx={{ width: 200 }}>
                Female
              </ToggleButton>
            </ToggleButtonGroup>
            {glasses ? (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <IconButton
                  aria-label="toggle glasses"
                  color="black"
                  onClick={() => setGlasses(!glasses)}
                  edge="end"
                  sx={{
                    height: 40,
                    width: 140,
                    mt: 5,
                    borderRadius: 1,
                    fontSize: 15,
                    backgroundColor: "#000000",
                    color: "#00ff9d",
                  }}
                >
                  ADDED!
                  <CheckIcon />
                </IconButton>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Button
                  variant="contained"
                  color="black"
                  size="large"
                  sx={{ mt: 5 }}
                  onClick={() => setGlasses(!glasses)}
                >
                  Add Glasses
                </Button>
              </div>
            )}
            {glasses ? (
              <Typography sx={{ fontSize: 20, mt: 1, mb: 5 }}>
                Click to remove glasses
              </Typography>
            ) : (
              <p></p>
            )}
            {partyHat ? (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <IconButton
                  aria-label="toggle party hat"
                  color="black"
                  onClick={() => setPartyHat(!partyHat)}
                  edge="end"
                  sx={{
                    height: 40,
                    width: 140,
                    mt: 2,
                    borderRadius: 1,
                    fontSize: 15,
                    backgroundColor: "#000000",
                    color: "#00ff9d",
                  }}
                >
                  ADDED!
                  <CheckIcon />
                </IconButton>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Button
                  variant="contained"
                  color="black"
                  size="large"
                  sx={{ mt: 2 }}
                  onClick={() => setPartyHat(!partyHat)}
                >
                  Add Party Hat
                </Button>
              </div>
            )}
            {partyHat ? (
              <Typography sx={{ fontSize: 20, mt: 1, mb: 5 }}>
                Click to remove party hat
              </Typography>
            ) : (
              <p></p>
            )}
            <div style={{ display: "flex", flexDirection: "row", marginTop: 10, marginBottom: 35 }}>
              <Button
                variant="contained"
                color="black"
                size="large"
                //     onClick={() => setPartyHat(!partyHat)}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="blackRed"
                size="large"
                sx={{ ml: 5 }}
                //     onClick={() => setPartyHat(!partyHat)}
              >
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <div className="profile-not-logged">
            <h1>
              You're not logged in! Log in or Register to access your Profile!
            </h1>
            <img
              src={ProfilePic}
              alt="Profile Picture"
              className="profile-icon"
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Profile;
