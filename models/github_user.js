import Sequelize from 'sequelize';
const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = new Sequelize('sqlite::memory:');

const github_user = sequelize.define('github_user', {
    id: {
        type: DataTypes.BIGSERIAL,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    owner_login: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    avatar_url: {
        type: DataTypes.STRING(150),
        allowNull: false 
    },
    "name": {
        type:DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull:false
    },
    visibility: {
        type:DataTypes.BOOLEAN,
        allowNull: false,
        default:true
    },
    default_branch: {
        type:DataTypes.STRING(100),
        allowNull:false
    },
    "size": {
        type:DataTypes.SMALLINT,
        allowNull:false
    }
})