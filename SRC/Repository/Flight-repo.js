import CrudRepo from "./crud-repo.js";
import db from "../models/index.js";

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
                // include:{
                //     model:db.Airplane
                // }
            }
         );
         return response;
    }
} 
export default FlightRepository;