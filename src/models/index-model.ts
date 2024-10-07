import sequelize from "../../database/database";
const models: any = {};

// user management
import user_details from "./users/user-details-model";

// Register the models Here
models.user_details = user_details

// Initialize models
Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});

// Sync the database and create tables

// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('Tables created successfully.');
//   })
//   .catch((error: any) => {
//     console.error('Error syncing tables:', error);
//   });
