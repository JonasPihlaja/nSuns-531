import * as dotenv from 'dotenv';
dotenv.config();
const { Sequelize } = require('sequelize');

// Declaring the type of database and path for the Seqzulize ORM
const sequelize = new Sequelize({
  dialect: 'mysql',
  storage: process.env.DB_URL,
});

// TODO:
// Can we use an export here and make it so that we import it to where it is needed?
// If so, should it be inside the middleware folder ? IMO no, the project structure
// will be clearer and smoother to navigate if put all tools neccessary for the ORM and DB
// inside this folder. 

// Perhaps multiple export options can be defined inside this file e.g. the closing of the DB connection and such
// sequelize.close()