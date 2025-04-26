export type Response = {
  question: string;
  response: string;
};

export type ChatRequest = {
  query: string;
};

export type ChatResponseOk<T> = {
  status: "OK";
  data: T | null;
};

export type ChatResponseFail = {
  status: "FAIL";
  errors: string[];
};

export type ChatResponse<T> = ChatResponseOk<T> | ChatResponseFail;

export type Chat = {
  role: "user" | "bot";
  chat: string;
};
