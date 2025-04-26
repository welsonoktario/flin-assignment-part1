import { createContext } from "react";
import { Chat } from "../../types";

type ChatBotContextType = {
  open: boolean;
  chats: Chat[];
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState: ChatBotContextType = {
  open: false,
  chats: [],
  setChats: () => {},
  setOpen: () => {},
};

export const ChatBotContext = createContext(initialState);
