import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Company } from "../entities/CompanyEntity";
import { Order } from "../entities/OrderEntity";

dotenv.config();

const host = process.env.DB_HOST;
const port = parseInt(process.env.DB_PORT ? process.env.DB_PORT : "3306");
const password = process.env.MYSQL_ROOT_PASSWORD;
const rootUser = process.env.MYSQL_ROOT_USER;
const database = process.env.MYSQL_DATABASE;

export const appDataSource = new DataSource({
  type: "mysql",
  host,
  port,
  username: rootUser,
  password,
  database,
  entities: [Company, Order],
  migrationsTableName: "migrations",
  migrations: [`${__dirname}/../migrations/*.ts`],
});
