import{FlightService } from "../Services/index.js"
import statusCodes from "http-status-codes";
import{successResponse , errorResponse} from "../Utils/Common/index.js";


/**
* POST: /flights * req-body {
flightNumber: 'UK 808', 
flightId: 'a380',
departureAirportId: 12,
arrivalAirportId: 11,
arrivalTime: '11:10:00', 
departureTime: '9:10:00',
price: 2000
boardingGate: '12A',
totalSeats: 120
}
*/

async function creatFlight(req, res)
{
    try 
    {
        const flight = await FlightService.createFlight({
            flightNumber:req.body.flightNumber,
            flightId:req.body.flightId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportID:req.body.arrivalAirportID,
            airvalTime:req.body.airvalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeates:req.body.totalSeates
        });
        console.log("I am Working");
        
        successResponse.data = flight;
        return res.status(statusCodes.CREATED).json(successResponse);
        
    } 
    catch (error) 
    {
        errorResponse.message = "Something Went Wrong Creating Flight";
        errorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        
    }
};


async function getAllFlights(req,res)
{
    try 
    {
        const flights = await FlightService.getAllFlights(req.query);
        successResponse.data = flights;
        return res.status(statusCodes.CREATED).json(successResponse);
    } 
    catch (error)
    { 
         errorResponse.message = "Something Went Wrong Finding Flights";
         errorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        
    }
    
};

async function getOneFlight(req,res) 
{
    try 
    {
        const flight = await FlightService.getOneFlight(req.params.id);
        successResponse.data = flight;
        return res.status(statusCodes.OK).json(successResponse);

    } 
    catch (error)
    {
        errorResponse.message = "Something Went Wrong Getting Flight By Id";
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
        
    }
    
};

async function updateSeats(req , res)
{
    try 
    {   
        const response = await FlightService.updateSeates({
            flightId:req.params.id,
            seats:req.body.seats,
            decrement:req.body.decrement
        });
        successResponse.data = response;
        return res.status(statusCodes.OK).json(successResponse);
        
    } 
    catch (error) 
    {
        errorResponse.message = "Can not update The Flight Seats";
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
        
    }
};


export{
    creatFlight,
    getAllFlights,
    getOneFlight,
    updateSeats,

}