import path from "path";
import { Sequelize } from "sequelize";

require("dotenv").config(path.join(__dirname + "../../.env"));

const PG_URL: string = process.env.PG_URL || "localhost:5432/postgres";

const sequelize = new Sequelize(PG_URL);

export default sequelize;
