import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.send("Hello, World!");
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});