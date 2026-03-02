import express from "express";
import cors from "cors";
import cokkieParser from "cookie-parser";

const app = express();
app.use(cokkieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

import healthCheckRoutes from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/health", healthCheckRoutes);

app.get("/", (req, res) => {
  res.send("Hello World from Express JS");
});

export default app;
