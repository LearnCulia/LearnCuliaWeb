import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../GlobalState";
import logo from "../images/LearnCuliaIcon.png";

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

const navItems = [
  { label: "Home", path: "/" },
  { label: "Info", path: "/info" },
  { label: "Single Player Games", path: "/single-player-games" },
  { label: "Contact", path: "/contact" },
  { label: "Mobile App", path: "/mobile-app" },
];

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mode, setMode] = useGlobalState("darkMode");
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setDrawerOpen(false);
    navigate(path);
  };

  const DarkModeToggle = () => (
    <IconButton
      onClick={() => setMode((p) => (p === "light" ? "dark" : "light"))}
      color="black"
    >
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar component="nav" color="seaGreen">
        <Toolbar>
          <img src={logo} className="navLogo" alt="LearnCuliaLogo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            LearnCulia
          </Typography>

          {/* Desktop */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: "#000" }} onClick={() => handleNavClick(item.path)}>
                {item.label}
              </Button>
            ))}
            <DarkModeToggle />
          </Box>

          {/* Mobile */}
          <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}>
            <DarkModeToggle />
            <IconButton color="black" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220, pt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={() => handleNavClick(item.path)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}
