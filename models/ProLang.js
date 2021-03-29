const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ProLang extends Model{}

ProLang.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        program:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "prolang",
    }
);

module.exports = ProLang;
