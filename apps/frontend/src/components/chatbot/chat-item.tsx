type ChatItemProps = {
  chat: string;
  role: "bot" | "user";
};

export function ChatItem({ chat, role }: ChatItemProps) {
  return (
    <div
      className="flex w-full data-[role=bot]:justify-start data-[role=user]:justify-end text-white data-[role=user]:pl-8 data-[role=bot]:pr-8 data-[role=user]:[&_div.chat-text]:bg-indigo-500 data-[role=bot]:[&_div.chat-text]:bg-blue-500"
      data-role={role}
    >
      <div className="chat-text px-3 py-2 rounded-md" data-role={role}>
        <p
          dangerouslySetInnerHTML={{
            __html: chat,
          }}
        />
      </div>
    </div>
  );
}
