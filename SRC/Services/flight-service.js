import { FlightRepository} from "../Repository/index.js";
import Apperror from "../Utils/Errors/app-errors.js";
import statusCodes from "http-status-codes";
import {Op} from "sequelize";

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