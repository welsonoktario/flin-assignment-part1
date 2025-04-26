import { useChatBot } from "../hooks/useChatBot";
import { ChatResponse } from "../types";

const COMMON_QUERIES = [
  "What is FLIN?",
  "Is FLIN safe and reliable to help pay off my debt?",
  "What types of debt can FLIN help you pay off?",
  "What is loan consolidation?",
];

export function ChatBotCommon() {
  const { chats, setChats } = useChatBot();

  async function handleQueryClick(q: string) {
    setChats([
      ...chats,
      {
        role: "user",
        chat: q,
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
            query: q,
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
    }
  }

  return (
    <div className="flex flex-none gap-x-2 overflow-x-auto my-3">
      {COMMON_QUERIES.map((q) => (
        <button
          className="bg-neutral-300 rounded-full px-3 py-2 whitespace-nowrap cursor-pointer"
          type="button"
          onClick={() => handleQueryClick(q)}
        >
          {q}
        </button>
      ))}
    </div>
  );
}
