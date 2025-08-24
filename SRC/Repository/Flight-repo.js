import CrudRepo from "./crud-repo.js";
import db from "../models/index.js";
import { Sequelize } from "sequelize";
import{addRowLockOnFlights} from "./queries.js"

class FlightRepository extends CrudRepo
{

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

    async updateRemaningSeats(flightId,seats,decrese = true)      // If the Parameter is true It Will Decrease The Seats Else It Will Increase The Seats
    {
        try 
        {
        const transaction = await db.sequelize.transaction();
        await db.sequelize.query(addRowLockOnFlights(flightId));

        const flight = await db.Flight.findByPk(flightId);
        if (!flight)
        {
            throw new Apperror("Flight Not Found",statusCodes.NOT_FOUND);
        }
        if (+decrese)
        {
            await flight.decrement("totalSeates", {by:seats} , {transaction:transaction});
        }
        else
        {
             await flight.increment("totalSeates", {by:seats}, {transaction:transaction});
        }
        await transaction.commit();
        return flight;
      
            
        } 
        catch (error)
        {
            await transaction.rollback();
            throw error;
            
        }
         
    }
} 
export default FlightRepository;