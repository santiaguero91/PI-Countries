const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    difficulty: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        }
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 72,
        }
    },
    season: {
        type: DataTypes.ARRAY(DataTypes.ENUM('Summer','Autumn','Winter','Spring')),
        allowNull: false,
    },
    country:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    }, {
        timestamps: false,
        freezeTableName: true,
    });
};
