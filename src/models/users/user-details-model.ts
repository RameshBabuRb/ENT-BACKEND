// user details table 
// created on => 03-02-2024

import { Model, DataTypes } from "sequelize";
import sequelize from '../../../database/database';

class user_details extends Model {
  public userId!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public mobileNumber!: string;
  public privilege!: string;
  public designation!: string;
  public status!: string;
  public profilePictureLocation!: string;
  public isDeleted!: boolean;
  public password!: string;
  public otp!: string;
  public createdBy!: string;
  public passwordCreatedTime!: Date;
  public inCorrectPasswordCount: any;
  public lastLoginTime!: Date;
  createdAt: any;
  user_logins: any;
  // public address!: string;
  // public country!: number;
  // public city!: string;
  // public imageUrl!: string;

}

user_details.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      autoIncrementIdentity: true,
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    mobileNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    privilege: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    designation: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profilePictureLocation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    otp: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    passwordCreatedTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    inCorrectPasswordCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    lastLoginTime: {
      type: DataTypes.DATE,
      allowNull: true,
      // defaultValue: DataTypes.NOW,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  },
  {
    tableName: "user_details",
    sequelize,
  }
);


export default user_details;
