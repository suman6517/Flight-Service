import { FlightRepository} from "../Repository/index.js";
import Apperror from "../Utils/Errors/app-errors.js";
import statusCodes from "http-status-codes";

const FlightRepos = new FlightRepository();


async function createFlight(data)
{
    try 
    {
        const flight = await FlightRepos.create(data);
        return flight;
        
    } catch (error) 
    {
       if(error.name == 'SequalizeValidationError')   // SequalizeValidationError Is a Type oF error Like User give the wrong data or wrong data type or they give the data in a Wrong Format;
       {
        let explanation = [];
        error.errors.foreach(err=>{
            explanation.push(err.message);
            console.log(explanation);
        });
        throw new Apperror(explanation,statusCodes.BAD_REQUEST);
       }

      throw new Apperror("Can not create a new Airport Object",statusCodes.INTERNAL_SERVER_ERROR );
    }
};

export const FlightService ={
    createFlight,



}