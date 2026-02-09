"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate response delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content:
            "Merci pour votre message. Un de nos experts vous répondra rapidement.",
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .chat-window {
          animation: slideUp 0.4s ease-out;
        }

        .message-item {
          animation: slideUp 0.3s ease-out;
        }

        .floating-btn:hover {
          transform: scale(1.1);
          animation: float 2s infinite;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b8860b;
          animation: pulse 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="floating-btn"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #b8860b 0%, #9d7600 100%)",
          color: "#faf9f6",
          border: "none",
          boxShadow: "0 8px 24px rgba(184, 134, 11, 0.3)",
          fontSize: 24,
          fontWeight: "600",
          zIndex: 1000,
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Ouvrir la conversation"
      >
        ✉
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="chat-window"
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 360,
            maxHeight: 500,
            background: "#faf9f6",
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
            border: "1px solid #e8e6e1",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              background: "linear-gradient(135deg, #b8860b 0%, #9d7600 100%)",
              color: "#faf9f6",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                }}
              >
                Assistance
              </div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>
                Réponse rapide
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: 24,
                cursor: "pointer",
                color: "#faf9f6",
                opacity: 0.7,
                transition: "opacity 0.2s",
                padding: 0,
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "1")}
              onMouseLeave={(e) => (e.target.style.opacity = "0.7")}
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              padding: 16,
              overflowY: "auto",
              background: "#faf9f6",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="message-item"
                style={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "75%",
                    padding: "10px 14px",
                    borderRadius:
                      msg.sender === "user"
                        ? "12px 2px 12px 12px"
                        : "2px 12px 12px 12px",
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(135deg, #b8860b 0%, #9d7600 100%)"
                        : "#ede8dd",
                    color: msg.sender === "user" ? "#faf9f6" : "#2a2a2a",
                    fontSize: 14,
                    lineHeight: 1.5,
                    wordBreak: "break-word",
                    boxShadow:
                      msg.sender === "user"
                        ? "0 2px 8px rgba(184, 134, 11, 0.15)"
                        : "0 1px 4px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: "2px 12px 12px 12px",
                    background: "#ede8dd",
                  }}
                >
                  <div className="typing-indicator">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            style={{
              display: "flex",
              gap: 8,
              padding: 12,
              borderTop: "1px solid #e8e6e1",
              background: "#faf9f6",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez votre message..."
              disabled={isLoading}
              style={{
                flex: 1,
                border: "1px solid #d4d0c4",
                borderRadius: 8,
                padding: "10px 12px",
                fontSize: 13,
                fontFamily: "inherit",
                background: "#fefdfb",
                color: "#2a2a2a",
                transition: "all 0.2s",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#b8860b";
                e.target.style.boxShadow = "0 0 0 3px rgba(184, 134, 11, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#d4d0c4";
                e.target.style.boxShadow = "none";
              }}
            />
            <button
              type="submit"
              disabled={isLoading}
              style={{
                background: "linear-gradient(135deg, #b8860b 0%, #9d7600 100%)",
                color: "#faf9f6",
                border: "none",
                borderRadius: 8,
                padding: "10px 16px",
                fontWeight: "600",
                fontSize: 13,
                cursor: isLoading ? "not-allowed" : "pointer",
                transition: "all 0.2s",
                opacity: isLoading ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 4px 12px rgba(184, 134, 11, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {isLoading ? "..." : "Envoyer"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
