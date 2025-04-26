import bodyParser from "body-parser";
import express from "express";
import chatRouter from "./routes/chat-route.js";
import cors from "cors";

const app = express();
const port = "3000";

// Parse incoming request as JSON
// before handled by the routes
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:4173"],
  })
);

// Routes
app.use("/chats", chatRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
