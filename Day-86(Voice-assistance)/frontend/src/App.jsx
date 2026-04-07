import React, { useState, useEffect, useRef } from "react";
import { Mic, Settings, Volume2 } from "lucide-react";
import Vapi from "@vapi-ai/web";

const PUB_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY || "YOUR_VAPI_PUBLIC_KEY";
const vapi = new Vapi(PUB_KEY);

function App() {
  const [isListening, setIsListening] = useState(false);
  const [statusText, setStatusText] = useState("Vapi Voice Assistant");
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // ---------- Register Vapi listeners ----------
  useEffect(() => {
    const handleCallStart = () => {
      setIsListening(true);
      setStatusText("Listening...");
      setMessages([]);
      setError(null);
    };

    const handleCallEnd = () => {
      setIsListening(false);
      setStatusText("Voice Assistant");
    };

    const handleMessage = (message) => {
      console.log("Vapi Message:", message); // <-- Debug: see incoming messages

      // Try transcript first, fallback to message content
      let text =
        message.transcript?.trim() || message.message?.content?.trim() || "";
      if (!text) return;

      // Remove repeated words
      text = text.replace(/\b(\w+)( \1\b)+/gi, "$1");

      // Remove repeated sentences
      const sentences = text.split(/(?<=[.?!])\s+/);
      const uniqueSentences = [...new Set(sentences)];
      text = uniqueSentences.join(" ");

      const role = message.role || "assistant";

      setMessages((prev) => {
        if (prev.length > 0 && prev[prev.length - 1].text === text) return prev;
        return [...prev, { role, text }];
      });
    };

    const handleError = (e) => {
      console.error("Vapi Error:", e);
      let errorMsg = "An error occurred";
      if (e.error?.message) {
        errorMsg =
          typeof e.error.message === "string"
            ? e.error.message
            : JSON.stringify(e.error.message);
      } else if (e.message) {
        errorMsg = e.message;
      }
      setError("Error: " + errorMsg);
      setIsListening(false);
      setStatusText("Connection Failed");
    };

    // Register all listeners
    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("message", handleMessage);
    vapi.on("error", handleError);

    return () => vapi.removeAllListeners(); // Cleanup
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ---------- Send message from input ----------
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim() || !isListening) return;

    vapi.send({
      type: "add-message",
      message: { role: "user", content: chatInput },
    });

    setMessages((prev) => [...prev, { role: "user", text: chatInput }]);
    setChatInput("");
  };

  // ---------- Toggle voice assistant ----------
  const toggleListening = async () => {
    if (isListening) {
      vapi.stop();
      setIsListening(false);
      setStatusText("Stopping...");
      return;
    }

    const assistantId =
      import.meta.env.VITE_VAPI_ASSISTANT_ID || "YOUR_ASSISTANT_ID";

    if (PUB_KEY === "YOUR_VAPI_PUBLIC_KEY") {
      setError(
        "Missing Vapi Public Key. Add VITE_VAPI_PUBLIC_KEY to frontend/.env",
      );
      setStatusText("Configuration Error");
      return;
    }
    if (assistantId === "YOUR_ASSISTANT_ID") {
      setError(
        "Missing Assistant ID. Add VITE_VAPI_ASSISTANT_ID to frontend/.env",
      );
      setStatusText("Configuration Error");
      return;
    }

    try {
      setStatusText("Connecting...");
      setError(null);
      await vapi.start(assistantId);
    } catch (err) {
      console.error("Failed to start Vapi", err);
      setError("Failed to connect. Check console or your Vapi Dashboard.");
      setStatusText("Voice Assistant");
    }
  };

  return (
    <div className="app-container">
      <div className="glow-bg"></div>

      <header className="header">
        <h1 className="title">Aura</h1>
        <p className="subtitle">AI Skincare Advisor</p>
      </header>

      <main className="main-content">
        <div className={`orb-container ${isListening ? "listening" : ""}`}>
          <div className="orb-ring"></div>
          <div className="orb-ring"></div>
          <div className="orb-ring"></div>
          <div className="orb-core" onClick={toggleListening}>
            {isListening ? <Volume2 size={48} /> : <Mic size={48} />}
          </div>
        </div>

        <div className="status-text">
          {error ? (
            <span style={{ color: "#fca5a5" }}>{error}</span>
          ) : (
            statusText
          )}
        </div>

        <div className="transcript-area">
          {messages.length === 0 && (
            <div className="empty-chat">Press the orb or type to start...</div>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-bubble ${msg.role === "user" ? "user" : "assistant"}`}
            >
              <div className="chat-text">{msg.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      </main>

      <form className="chat-input-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder={
            isListening ? "Type a message..." : "Start session to chat..."
          }
          className="chat-input"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          disabled={!isListening}
        />
      </form>

      <footer className="controls">
        <button
          className={`btn ${isListening ? "btn-danger" : "btn-primary"}`}
          type="button"
          onClick={toggleListening}
        >
          {isListening ? "End Session" : "Start Session"}
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => alert("Settings here")}
        >
          <Settings size={20} />
        </button>
      </footer>
    </div>
  );
}

export default App;
