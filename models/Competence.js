const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Competence extends Model{}

Competence.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        post_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "post",
                key: "id",
            },
        },
        prolang_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "ProLang",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "competence",
    }
);

module.exports = Competence;
