import { Router } from "express";
import { db } from "../lib/db.js";

const chatRoute = Router();

chatRoute.post("/", (req, res) => {
  const body = req.body;

  if (!body.query || !body.query.trim()) {
    res.status(400).json({
      status: "FAIL",
      errors: ["Enter your question"],
    });

    return;
  }

  const responses = db.search(body.query.toLowerCase(), {
    limit: 1,
  });

  res.status(200).json({
    status: "OK",
    data:
      responses.length > 0
        ? responses[0].item.response
        : `I'm sorry, I didn't quite catch that. For more information, please reach out to our <span><a href="#">Customer Support</a></span> team—they'll take great care of you!`,
  });
});

export default chatRoute;
