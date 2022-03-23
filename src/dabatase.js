import Sequelize from 'sequelize'
import { user } from './models/index.js'
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './sql/database.sqlite'
  });
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  export default sequelize;