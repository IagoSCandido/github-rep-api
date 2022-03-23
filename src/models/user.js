import sequelize from 'Sequelize';

const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    owner_login: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    avatar_url: {
        type: DataTypes.TEXT,
        allowNull: false 
    },
    "name": {
        type:DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    visibility: {
        type:DataTypes.INTEGER,
        allowNull: false,
        default:1
    },
    default_branch: {
        type:DataTypes.TEXT,
        allowNull:false
    },
    "size": {
        type:DataTypes.INTEGER,
        allowNull:false
    }
})