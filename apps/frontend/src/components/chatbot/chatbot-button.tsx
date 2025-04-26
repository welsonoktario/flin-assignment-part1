import { useChatBot } from "../../hooks/useChatBot";

export function ChatBotButton() {
  const { setOpen } = useChatBot();

  return (
    <button
      className="fixed bottom-16 right-16 z-50 rounded-full px-4 py-3 bg-blue-500 text-white"
      onClick={() => setOpen(true)}
    >
      Chat with a Bot
    </button>
  );
}
