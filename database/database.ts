import { Sequelize } from "sequelize-typescript";



const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'sql12.freesqldatabase.com',
  port: 3306 ,
  username: 'sql12735581',
  password: 'ZVcgu7CJGp',
  database: 'sql12735581',
  logging: false,
});

export default sequelize;
