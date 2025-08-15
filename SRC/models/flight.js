'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane , {
        foreignKey:"flightId",
        as:"airplaneDetails"
      
      });
      this.belongsTo(models.Airport , {
        foreignKey:"departureAirportId",
        as: 'departureAirport',
      
      });
      this.belongsTo(models.Airport , {
        foreignKey:"arrivalAirportID",
        as: 'arrivalAirport',
      
      });
    }
  }
  Flight.init({
    flightNumber: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    flightId: {
      type:DataTypes.INTEGER,
       allowNull:false,
    },
    departureAirportId:{
      type:DataTypes.STRING,
       allowNull:false,
    },
    arrivalAirportID:{
      type:DataTypes.STRING,
       allowNull:false,
    },
    airvalTime:{ 
      type:DataTypes.DATE,
       allowNull:false,

    },
    departureTime: { 
      type:DataTypes.DATE,
       allowNull:false,
    },
    price: {
      type:DataTypes.INTEGER,
       allowNull:false,
    },
    boardingGate:{
      type:DataTypes.STRING,
      
    },
    totalSeates:{ 
      type:DataTypes.INTEGER,
       allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};