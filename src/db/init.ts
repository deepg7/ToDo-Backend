import sequelize from ".";
import Task from "../models/Task";

const dbInit = async () => {
  await sequelize.authenticate();
  await Task.sync({ alter: true });
  console.log("Database connection has been established successfully.");
};

export default dbInit;
