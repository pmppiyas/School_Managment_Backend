import express from "express";
import cors from "cors";
import router from "./app/Routes";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cors());

app.use(cookieParser());
app.use("/api/v1", router);

app.get("/", async (req, res) => {
  res.status(200).send({
    success: true,
    message: "Congratulations, Welcome to your School Database.",
  });
});

export default app;
