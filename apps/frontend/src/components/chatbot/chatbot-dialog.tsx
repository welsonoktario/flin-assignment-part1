import { useEffect, useRef, useState } from "react";
import { useChatBot } from "../../hooks/useChatBot";
import { ChatResponse } from "../../types";
import { ChatBotCommon } from "../chatbot-common";
import { ChatItem } from "./chat-item";

export function ChatBotDialog() {
  const { chats, setChats, setOpen } = useChatBot();

  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const chatsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  async function handleChatSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    setChats([
      ...chats,
      {
        role: "user",
        chat: query,
      },
    ]);

    try {
      const res = await fetch(
        import.meta.env.VITE_PUBLIC_BACKEND_URL + "/chats",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
          }),
        }
      );

      const json = (await res.json()) as ChatResponse<string>;

      if (json.status !== "OK") {
        throw new Error(json.errors.join(","));
      }

      if (json.data && json.data.trim()) {
        setChats((prev) => [
          ...prev,
          {
            role: "bot",
            chat: json.data!,
          },
        ]);
      }
    } catch (error: any) {
      setChats((prev) => [
        ...prev,
        {
          role: "bot",
          chat: error?.message ?? "An error occurred, please try again later",
        },
      ]);
    } finally {
      setIsLoading(false);
      setQuery("");
    }
  }

  return (
    <div className="absolute right-16 bottom-16 z-50">
      <div className="w-96 rounded-md shadow-md flex flex-col bg-white overflow-hidden">
        <div className="flex justify-between w-full p-4 bg-blue-500 text-white shadow-md">
          <p>Chat Bot</p>
          <button onClick={() => setOpen(false)}>X</button>
        </div>

        <div className="max-h-[32rem] overflow-y-auto w-full pt-4 flex flex-col">
          <div className="px-4 flex flex-col gap-y-4">
            {chats.map((chat) => (
              <ChatItem
                key={`${chat.role}-${chat.chat}`}
                chat={chat.chat}
                role={chat.role}
              />
            ))}
          </div>
          <ChatBotCommon />
          <div ref={chatsRef} />
        </div>

        <form
          className="flex w-full items-center px-4 py-2 gap-x-4 border-t border-neutral-300"
          onSubmit={handleChatSubmit}
        >
          <input
            className="flex-grow p-2"
            placeholder="Enter your question"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />

          <button
            className="bg-blue-500 text-white rounded-md px-3 py-2 cursor-pointer"
            role="button"
            disabled={isLoading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
