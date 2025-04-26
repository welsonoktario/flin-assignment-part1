import { ChatBotButton } from "./components/chatbot/chatbot-button";
import { ChatBotDialog } from "./components/chatbot/chatbot-dialog";
import { useChatBot } from "./hooks/useChatBot";

export default function App() {
  const { open } = useChatBot();

  return (
    <div className="min-w-screen min-h-screen">
      {open ? <ChatBotDialog /> : <ChatBotButton />}
    </div>
  );
}
