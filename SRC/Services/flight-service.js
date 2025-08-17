import { FlightRepository} from "../Repository/index.js";
import Apperror from "../Utils/Errors/app-errors.js";
import statusCodes from "http-status-codes";
import {Op} from "sequelize";
import{ComapreTime} from "../Utils/Helpers/index.js";
const FlightRepos = new FlightRepository();


async function createFlight(data)
{
    try 
    {
        const isValid = ComapreTime(data.departureTime, data.airvalTime);
        if(!isValid)
        {
            
            throw new Apperror("Departure Time Must be Before Arrival Time",statusCodes.BAD_REQUEST);
        }
        const flight = await FlightRepos.create(data);
        return flight;
        
        
    } 
    catch (error) 
    {
        if (error instanceof Apperror) 
        {
        throw error;
        }
       if(error.name == 'SequelizeValidationError')
       {
        let explanation = [];
        error.errors.forEach(err=>{
            explanation.push(err.message);
            console.log(explanation);
        });
        console.log(error);
        
        throw new Apperror(explanation,statusCodes.BAD_REQUEST);
       }

      throw new Apperror("Can not create a new Flight Object",statusCodes.INTERNAL_SERVER_ERROR );
    }
};

async function getAllFlights(query) 
{
    // Trip is going to be a Object Mum -> Del
    
    let customeFilter = {};
    let sortFilter =[];
    const endingTripDate = "23:59:00";

    if(query.trips)
    {
       const [departureAirportId, arrivalAirportID] = query.trips.split("-");
        customeFilter.departureAirportId = departureAirportId;
        customeFilter.arrivalAirportID = arrivalAirportID;

        // Price Filter 
        if(query.price)
        {
            const [minPrice , maxPrice] = query.price.split("-");
            customeFilter.price = {[Op.between]:[minPrice,maxPrice]}
        }


        if(query.travelers) // Filter For Total Seates
        {
            customeFilter.totalSeates = 
            {
                [Op.gte]:query.travelers

            }
        };

        // Date Base Filter 
//      if (query.tripDate) {
//     // Parse start of the given day
//     const startDate = new Date(`${query.tripDate}T00:00:00Z`);

//     // Add your desired hours to cover flights past midnight
//     const hoursToAdd = endingTripDate || 8; // example: 8 hours after midnight next day
//     const endDate = new Date(startDate.getTime() + hoursToAdd * 60 * 60 * 1000 + 24 * 60 * 60 * 1000);

//     customeFilter.departureTime = {
//         [Op.between]: [startDate, endDate]
//     };
// }

if (query.tripDate) {
    // Parse tripDate into a Date object starting at midnight UTC
    const startDate = new Date(`${query.tripDate}T00:00:00Z`);

    // endingTripDate is in HH:mm:ss format — split into hours, minutes, seconds
    const [endHour, endMin, endSec] = endingTripDate.split(':').map(Number);

    // Create endDate by setting the time on the same date
    const endDate = new Date(startDate);
    endDate.setUTCHours(endHour, endMin, endSec, 999);

    customeFilter.departureTime = {
        [Op.between]: [startDate, endDate]
    };
};


 if(query.sort)
 {
    const params = query.sort.split(",");
   
    const sortFilters = params.map((param)=>param.split("_"));
    sortFilter = sortFilters;

        // Todo:- Add a check that they are same if they are same throw error 
        try 
        {
            const flights  = await FlightRepos.getAllFlights(customeFilter ,sortFilter);
            return flights;
        } 
        catch (error) 
        {
             throw new Apperror("Can not Fetch all the data for Flights",statusCodes.INTERNAL_SERVER_ERROR );
        }
    }
}
}
    

export const FlightService ={
    createFlight,
    getAllFlights,



}