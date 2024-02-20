import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import logger from "./src/utilis/logger.js";
import rateLimitMiddleware from "./src/middlewares/rateLimitMiddleware.js";

import todoRouter from "./src/routes/todoRoutes.js";
import userRouter from "./src/routes/userRouter.js";
import groupRoutes from "./src/routes/groupRouter.js";
import postRoutes from "./src/routes/postRouter.js";
import eventRoutes from "./src/routes/eventRoutes.js";
import commentRouter from "./src/routes/commentRouter.js";
import friendshipRouter from "./src/routes/friendshipRouter.js";
import messageRouter from "./src/routes/messageRouter.js";
import photoRouter from "./src/routes/photoRouter.js";
import eventAttendeesRouter from "./src/routes/eventAttendeeRouter.js";

dotenv.config();

const PORT = process.env.PORT || 8500;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
rateLimitMiddleware(app);

app.get("/health", (req, res) => {
  res.status(200).send("I am very healthy💪");
});

//Routes
app.use("/api", friendshipRouter);
app.use("/api", messageRouter);
app.use("/api", photoRouter);
app.use("/api/v1", commentRouter);
app.use("/api", eventRoutes);
app.use("/api", groupRoutes);
app.use("/api", postRoutes);
app.use("/api", todoRouter);
app.use("/api", userRouter);
app.use("/api", eventAttendeesRouter);

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
