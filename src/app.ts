import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const application = async () => {
  const app: Express = express();
  const port = process.env.PORT;

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello world");
  });

  app.listen(port, () => {
    console.log(`🟢 server is running on http://localhost:${port}`);
  });
};

application();
