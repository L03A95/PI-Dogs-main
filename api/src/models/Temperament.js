const { DataTypes, UUIDV4, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('temperament', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            unique: true
        }
    },{timestamps:false})
}