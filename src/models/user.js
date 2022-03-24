//TODO resolver o erro "TypeError: Sequelize.define is not a function";
import { BIGINT, STRING, INTEGER } from 'sequelize';
import sequelize from '../database.js'

const user = sequelize.define('user', {
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
    name: {
        type: STRING,
        allowNull: false
    },
    description: {
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
    size: {
        type: BIGINT,
        allowNull:false
    }
})

export default user;