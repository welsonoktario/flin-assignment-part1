import { useState } from "react";
import { Chat } from "../../types";
import { ChatBotContext } from "./chatbot-context";

export const ChatBotProvider = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [chats, setChats] = useState<Chat[]>([
    {
      role: "bot",
      chat: "Hello, I am a Chat Bot. May I help you with anything?",
    },
  ]);

  return (
    <ChatBotContext.Provider
      value={{
        open,
        chats,
        setOpen,
        setChats,
      }}
    >
      {children}
    </ChatBotContext.Provider>
  );
};
