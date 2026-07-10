import React, { useEffect, useState } from "react";
import "../CSSFiles/ForgotPassword.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { db } from "../firebase.js";
import { useGlobalState } from "../GlobalState.js";
import { useLocation } from "react-router-dom";

const TextFieldTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#ffffff",
          "--TextField-brandBorderHoverColor": "#ffffff",
          "--TextField-brandBorderFocusedColor": "#ffffff",
          "& label.Mui-focused": { color: "var(--TextField-brandBorderFocusedColor)" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { borderColor: "var(--TextField-brandBorderColor)" },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: { borderColor: "var(--TextField-brandBorderHoverColor)" },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: { borderColor: "var(--TextField-brandBorderFocusedColor)" },
        },
      },
    },
  },
});

const ForgotPassword = () => {
  const [mode] = useGlobalState("darkMode");
  const location = useLocation();
  const code = new URLSearchParams(location.search).get("code");

  const [status, setStatus] = useState("verifying");
  const [tokenDoc, setTokenDoc] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const dark = mode === "dark";

  useEffect(() => {
    if (!code) {
      setStatus("invalid");
      return;
    }

    const verify = async () => {
      try {
        const snapshot = await db
          .collection("passwordResetTokens")
          .where("code", "==", code)
          .limit(1)
          .get();

        if (snapshot.empty) {
          setStatus("invalid");
          return;
        }

        const docSnap = snapshot.docs[0];
        const data = docSnap.data();
        const expiresAt = data.expiresAt.toDate();

        if (new Date() > expiresAt) {
          setStatus("invalid");
          return;
        }

        setTokenDoc({ id: docSnap.id, ...data });
        setStatus("ready");
      } catch (err) {
        console.error("verify error:", err);
        setStatus("invalid");
      }
    };

    verify();
  }, [code]);

  const handleSubmit = async () => {
    setErrorMsg("");
    if (newPassword.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://resetpassword-ak5z2xph6q-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, newPassword }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to reset password.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const btnSx = {
    backgroundColor: dark ? "#00ff9d" : "#000",
    color: dark ? "#000" : "#00ff9d",
    "&:hover": { backgroundColor: dark ? "#00e68a" : "#222" },
    mt: 3,
    px: 4,
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <div
        className="forgotpassword-page"
        style={{ backgroundColor: dark ? "#242430" : "#ffffff", color: dark ? "#fff" : "#000" }}
      >
        {(status === "invalid" || status === "verifying") && (
          <Box sx={{ textAlign: "center", maxWidth: 480, px: 3 }}>
            {status === "verifying" ? (
              <CircularProgress sx={{ color: "#6bffc6" }} />
            ) : (
              <>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  This page doesn't exist!
                </Typography>
                <Typography sx={{ color: dark ? "#aaa" : "#555", lineHeight: 1.8 }}>
                  If you tried to reset your password from the LearnCulia mobile app, please follow the instructions in the email. The link may have expired — request a new one from the app.
                </Typography>
              </>
            )}
          </Box>
        )}

        {status === "ready" && (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 420, px: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              Reset Your Password
            </Typography>
            <Typography sx={{ color: dark ? "#aaa" : "#666", mb: 4, textAlign: "center", fontSize: "0.95rem" }}>
              Resetting password for <strong>{tokenDoc?.email}</strong>
            </Typography>

            <ThemeProvider theme={dark ? TextFieldTheme : createTheme()}>
              <TextField
                label="New Password"
                type={showNew ? "text" : "password"}
                variant="outlined"
                fullWidth
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ mb: 2, input: { color: dark ? "#fff" : "#000" } }}
                InputLabelProps={{ style: { color: dark ? "#aaa" : undefined } }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowNew((s) => !s)} edge="end" sx={{ color: dark ? "#aaa" : "#555" }}>
                        {showNew ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Confirm Password"
                type={showConfirm ? "text" : "password"}
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{ input: { color: dark ? "#fff" : "#000" } }}
                InputLabelProps={{ style: { color: dark ? "#aaa" : undefined } }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirm((s) => !s)} edge="end" sx={{ color: dark ? "#aaa" : "#555" }}>
                        {showConfirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </ThemeProvider>

            {errorMsg && (
              <Typography sx={{ color: "red", mt: 1.5, fontSize: "0.9rem" }}>{errorMsg}</Typography>
            )}

            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
              disabled={!newPassword || !confirmPassword || loading}
              sx={[btnSx, { "&.Mui-disabled": { backgroundColor: "#d4d4d4", color: "#737373" } }]}
            >
              {loading ? <CircularProgress size={22} sx={{ color: "#fff" }} /> : "Reset Password"}
            </Button>
          </Box>
        )}

        {status === "success" && (
          <Box sx={{ textAlign: "center", maxWidth: 420, px: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Password Reset!
            </Typography>
            <Typography sx={{ color: dark ? "#aaa" : "#555", lineHeight: 1.8 }}>
              Your password has been updated. You can now log in to the LearnCulia mobile app with your new password.
            </Typography>
          </Box>
        )}
      </div>
    </ThemeProvider>
  );
};

export default ForgotPassword;
