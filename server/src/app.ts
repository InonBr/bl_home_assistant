import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { appDataSource } from "./systems/typeOrm.config";
import companyRoutes from "./routes/company/companyRoutes";
import orderRoutes from "./routes/order/orderRoutes";

dotenv.config();

const application = async () => {
  const app: Express = express();
  const port = process.env.PORT;

  app.use(cors());
  app.use(express.json());

  try {
    await appDataSource.initialize();

    console.log(`🔵 MySQL DB is connected `);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);

      throw err;
    }
  }

  app.use("/api", companyRoutes);
  app.use("/api", orderRoutes);

  app.listen(port, () => {
    console.log(`🟢 server is running on http://localhost:${port}`);
  });
};

application();
