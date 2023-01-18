const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lifetime: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn.icon-icons.com/icons2/2070/PNG/512/dog_icon_125586.png'
    }
  },{timestamps: false});
};
