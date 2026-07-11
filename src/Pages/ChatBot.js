import React, { useState, useRef, useEffect } from "react";
import "../CSSFiles/ChatBot.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalState } from "../GlobalState";
import ReactMarkdown from "react-markdown";

const BACKEND_URL = "https://learnculia.onrender.com";

const INITIAL_MESSAGE = {
  id: "0",
  role: "assistant",
  text: "Hey there! I'm CuliaBot, your LearnCulia assistant. Ask me anything about dyscalculia, the games, or how to improve your math skills!",
};

const ChatBot = () => {
  const [mode] = useGlobalState("darkMode");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { id: Date.now().toString(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.filter((m) => m.id !== "0"),
        }),
      });
      const data = await res.json();
      const reply =
        res.status === 429
          ? data.error
          : res.ok
          ? data.response
          : "Something went wrong. Please try again.";
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString() + "r", role: "assistant", text: reply },
      ]);
    } catch (_) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "e",
          role: "assistant",
          text: "Could not reach the server. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const dark = mode === "dark";

  return (
    <div className="chatbot-container">
      <div className="chatbot-bubble" onClick={() => setIsOpen((o) => !o)}>
        <ChatBubbleIcon style={{ marginTop: 5 }} />
      </div>

      {isOpen && (
        <div
          className="chatbot-overlay"
          style={{
            backgroundColor: dark ? "#1e1e2a" : "#fff",
            border: dark ? "1px solid #333" : "1px solid #ccc",
          }}
        >
          <div className="chatbot-header">
            <span style={{ fontWeight: "bold", fontSize: "0.95rem", color: "#000", padding: "12px 16px" }}>
              CuliaBot
            </span>
            <button className="close-chatbot" onClick={() => setIsOpen(false)} style={{ color: "#000", padding: "12px 16px" }}>
              <CloseIcon fontSize="small" />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={msg.id}
                  className={`chatbot-bubble-row ${isUser ? "chatbot-bubble-user" : "chatbot-bubble-assistant"}`}
                >
                  <div
                    className="chatbot-bubble-msg"
                    style={
                      isUser
                        ? { backgroundColor: "#6bffc6", color: "#000" }
                        : {
                            backgroundColor: dark ? "#2a2a3a" : "#f0f0f0",
                            color: dark ? "#eee" : "#111",
                            border: dark ? "1px solid #444" : "1px solid #ddd",
                          }
                    }
                  >
                    {isUser ? (
                      msg.text
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p style={{ margin: "0 0 6px 0" }}>{children}</p>,
                          ul: ({ children }) => <ul style={{ margin: "4px 0 6px 0", paddingLeft: 18 }}>{children}</ul>,
                          ol: ({ children }) => <ol style={{ margin: "4px 0 6px 0", paddingLeft: 18 }}>{children}</ol>,
                          li: ({ children }) => <li style={{ marginBottom: 3 }}>{children}</li>,
                          strong: ({ children }) => <strong style={{ fontWeight: 600 }}>{children}</strong>,
                          code: ({ children }) => <code style={{ backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 4, padding: "1px 5px", fontSize: "0.82rem", fontFamily: "monospace" }}>{children}</code>,
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="chatbot-bubble-row chatbot-bubble-assistant">
                <div
                  className="chatbot-bubble-msg chatbot-typing"
                  style={{
                    backgroundColor: dark ? "#2a2a3a" : "#f0f0f0",
                    color: dark ? "#aaa" : "#666",
                    border: dark ? "1px solid #444" : "1px solid #ddd",
                  }}
                >
                  <span className="chatbot-dot" />
                  <span className="chatbot-dot" />
                  <span className="chatbot-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="chatbot-input-row"
            style={{
              borderTop: dark ? "1px solid #333" : "1px solid #e0e0e0",
              backgroundColor: dark ? "#1e1e2a" : "#fff",
            }}
          >
            <textarea
              ref={inputRef}
              className="chatbot-input"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              maxLength={500}
              style={{
                color: dark ? "#eee" : "#111",
                backgroundColor: dark ? "#2a2a3a" : "#f5f5f5",
                border: dark ? "1px solid #555" : "1px solid #ccc",
              }}
            />
            <button
              className="chatbot-send-btn"
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              style={{ opacity: !input.trim() || loading ? 0.4 : 1 }}
            >
              <SendIcon fontSize="small" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
