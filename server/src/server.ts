import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source";
import { User } from "./entities/User";

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.send("Hello, World!");
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);

  AppDataSource.initialize()
    .then(async () => {
      console.log("Inserting a new user into the database...");
    })
    .catch((error) => console.log(error));
});
