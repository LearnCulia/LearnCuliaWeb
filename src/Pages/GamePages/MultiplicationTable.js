import React from "react";
import Box from "@mui/material/Box";
import { useGlobalState } from "../../GlobalState.js";

const SIZE = 13;

const MultiplicationTable = () => {
  const [mode] = useGlobalState("darkMode");
  const dark = mode === "dark";

  const headerBg = "#6bffc6";
  const headerText = "#000";
  const evenBg = dark ? "#2e2e3a" : "#f0fff8";
  const oddBg = dark ? "#242430" : "#ffffff";
  const cellText = dark ? "#fff" : "#000";
  const borderColor = dark ? "#444" : "#c0e8d8";

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        overflowY: "auto",
        maxHeight: "70vh",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${SIZE}, 1fr)`,
          width: "100%",
          maxWidth: 480,
          mx: "auto",
        }}
      >
        {Array.from({ length: SIZE }, (_, row) =>
          Array.from({ length: SIZE }, (_, col) => {
            const val =
              row === 0 && col === 0
                ? "×"
                : row === 0
                ? col
                : col === 0
                ? row
                : row * col;

            const isHeader = row === 0 || col === 0;
            const isDiag = row !== 0 && col !== 0 && row === col;
            const bg = isHeader
              ? headerBg
              : isDiag
              ? "#ffe066"
              : (row + col) % 2 === 0
              ? evenBg
              : oddBg;

            return (
              <Box
                key={`${row}-${col}`}
                sx={{
                  aspectRatio: "1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: bg,
                  border: `0.5px solid ${borderColor}`,
                  fontSize: "clamp(7px, 0.9vw, 10px)",
                  fontWeight: isHeader ? "bold" : "400",
                  color: isHeader ? headerText : cellText,
                  userSelect: "none",
                }}
              >
                {val}
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
};

export default MultiplicationTable;
