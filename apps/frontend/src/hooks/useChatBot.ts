import { useContext } from "react";
import { ChatBotContext } from "../components/chatbot/chatbot-context";

export const useChatBot = () => {
  const value = useContext(ChatBotContext);

  if (!value) {
    throw new Error("useChatBot must be used inside ChatBotProvider");
  }

  return value;
};
