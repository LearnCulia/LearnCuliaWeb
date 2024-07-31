import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/ChatBot.css";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/LearnCuliaIcon.png";
import icon from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/learnculiaiconlogo.jpg";
import homei2 from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/homei2.jpeg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGlobalState } from "../GlobalState";
import home1 from "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/images/stem-t4l--PnSpCHYKsw-unsplash.jpg";
import Divider from "@mui/material/Divider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const ChatBot = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-bubble" onClick={toggleChatbot}>
        <ChatBubbleIcon style={{ marginTop: 5 }}/>
      </div>
      {isOpen && (
        <div className="chatbot-overlay">
          <div className="chatbot-body">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/Drmst_AXfeMAJszhQxAU1"
              className="chatbot-iframe"
              frameborder="1"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
