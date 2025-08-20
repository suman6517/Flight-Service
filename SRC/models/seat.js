'use strict';
import {Model} from 'sequelize';
import { seatType } from '../Utils/Common/index.js';

const {BUSINESS , ECONOMY , PRIMIUM_ECONOMY , FIRST} =seatType;
export default (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane , {
        foreignKey:"airplaneId",
        as:"airplaneSeatDetails"
      
      }); 
      
    }
  }
  Seat.init({
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    row: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    column: {
      type:DataTypes.STRING,
      allowNull:false
    },
    seatClass:{ 
      type:DataTypes.ENUM,
      values:[BUSINESS , ECONOMY , PRIMIUM_ECONOMY , FIRST],
      allowNull:false,
      defaultValue:ECONOMY
    }
  }, 
  {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};