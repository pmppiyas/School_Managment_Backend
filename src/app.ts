import express from "express";
import cors from "cors";
// import cookieParser from "cookieParser";
const app = express();

app.use(express.json());
app.use(cors());

// app.use("/api/v1",)

app.get("/", async (req, res) => {
  res.status(200).send({
    success: true,
    message: "Congratulations, Welcome to your School Database.",
  });
});

export default app;
