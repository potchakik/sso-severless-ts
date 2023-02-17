import "reflect-metadata";
import { DataSource } from "typeorm";
import { Google } from "./entity/Google";
import { Profile } from "./entity/Profile";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "dansuba",
  password: "123456",
  database: "sso_users",
  synchronize: true,
  logging: false,
  entities: [User, Google, Profile],
  migrations: [],
  subscribers: [],
});
