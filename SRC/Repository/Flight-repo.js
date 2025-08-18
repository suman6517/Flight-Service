import CrudRepo from "./crud-repo.js";
import db from "../models/index.js";
import { Sequelize } from "sequelize";

class FlightRepository extends CrudRepo{

    constructor()
    {
         super(db.Flight);
        
    }
   async getAllFlights(filter,sort) //Custom Function to filter all the quaries of The Customer 
    {
         const response = await db.Flight.findAll(
            {
                where:filter,
                order:sort,
                include:[
                {
                    model:db.Airplane,
                    as: "airplaneDetails",
                    required: true,
                },
                {
                   model: db.Airport,
                   as: "departureAirport",
                   required: true,
                   on: 
                   {
                     col1: Sequelize.where
                    (
                     Sequelize.col("Flight.departureAirportId"),"=",Sequelize.col("departureAirport.code")
                    ),
                    },
                    include:
                    {
                        model:db.City,
                        required: true
                    }
                },
                 {
                   model: db.Airport,
                   as: "arrivalAirport",
                   required: true,
                   on: 
                   {
                     col1: Sequelize.where
                    (
                     Sequelize.col("Flight.arrivalAirportID"),"=",Sequelize.col("arrivalAirport.code")
                    ),

                    },
                    include:
                    {
                        model:db.City,
                        required: true
                    }
                },
                
               ]
            }
         );
         return response;
    }
} 
export default FlightRepository;