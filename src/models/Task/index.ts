import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../db/index";

interface TaskAttributes {
  id: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TaskInput extends Optional<TaskAttributes, "id"> {}
export interface TaskOutput extends Required<TaskAttributes> {}

class Task extends Model<TaskAttributes, TaskInput> implements TaskAttributes {
  public id!: number;
  public name!: string;
  public description!: string;

  //timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
  }
);

export default Task;
