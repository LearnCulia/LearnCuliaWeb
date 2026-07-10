import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import icon from "../images/learnculialogo.jpg";

export default function Footer({ mode }) {
  const navigate = useNavigate();

  const bgStyle = { backgroundColor: "#6bffc6", color: "#000000" };

  const linkStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "3px 0",
    margin: 0,
    fontSize: "0.9rem",
    textAlign: "left",
    color: "#000000",
    display: "block",
    width: "fit-content",
  };

  const pages = [
    { label: "Home", path: "/" },
    { label: "Info", path: "/info" },
    { label: "Games", path: "/single-player-games" },
    { label: "Contact", path: "/contact" },
    { label: "Mobile App", path: "/mobile-app" },
  ];

  const legal = [
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy-policy" },
  ];

  const colHeaderStyle = {
    fontWeight: "bold",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: "0.75rem",
  };

  return (
    <>
      <Box
        sx={{
          ...bgStyle,
          width: "100%",
          boxSizing: "border-box",
          px: { xs: 3, sm: 8 },
          pt: 5,
          pb: 2,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", sm: "1.5fr 1fr 1fr" },
            gap: { xs: 4, sm: 6 },
            mb: 4,
            alignItems: "start",
          }}
        >
          <Box sx={{ gridColumn: { xs: "1 / -1", sm: "auto" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
              <img
                src={icon}
                alt="LearnCulia"
                style={{ width: 36, height: 36, borderRadius: 8 }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                LearnCulia
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#000000", maxWidth: 260, lineHeight: 1.6 }}
            >
              Empowering kids who struggle with dyscalculia through interactive games and tutorials.
            </Typography>
          </Box>

          <Box>
            <p style={{ ...colHeaderStyle, color: "#000000" }}>Pages</p>
            {pages.map((p) => (
              <button key={p.label} style={linkStyle} onClick={() => navigate(p.path)}>
                {p.label}
              </button>
            ))}
          </Box>

          <Box>
            <p style={{ ...colHeaderStyle, color: "#000000" }}>Legal</p>
            {legal.map((p) => (
              <button key={p.label} style={linkStyle} onClick={() => navigate(p.path)}>
                {p.label}
              </button>
            ))}
          </Box>
        </Box>

        <Divider sx={mode === "dark" ? { borderColor: "#000000" } : { borderColor: "#000000" }} />
        <Typography
          variant="caption"
          sx={{ display: "block", textAlign: "center", pt: 2, color: "#000000" }}
        >
          © {new Date().getFullYear()} LearnCulia. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
