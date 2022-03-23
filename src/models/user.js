//TODO resolver o erro "TypeError: Sequelize.define is not a function";
import Sequelize, { BIGINT, STRING, INTEGER } from 'sequelize';
import DataTypes from 'sqlite3';


const user = Sequelize.define ('user', {
    id: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    owner_login: {
        type: STRING,
        allowNull: false
    },
    avatar_url: {
        type: STRING,
        allowNull: false 
    },
    "name": {
        type: STRING,
        allowNull: false
    },
    "description": {
        type: STRING,
        allowNull:false
    },
    visibility: {
        type: INTEGER,
        allowNull: false,
        default:1
    },
    default_branch: {
        type: STRING,
        allowNull:false
    },
    "size": {
        type: BIGINT,
        allowNull:false
    }
})

export default user;