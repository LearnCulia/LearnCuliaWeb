import React from "react";
import "/Users/sathvikm/LearnCuliaProject/DyscalculiaWeb/learnculia-web/src/CSSFiles/ChatBot.css";
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
