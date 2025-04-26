import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import { ChatBotProvider } from "./components/chatbot/chatbot-provider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChatBotProvider>
      <App />
    </ChatBotProvider>
  </StrictMode>
);
