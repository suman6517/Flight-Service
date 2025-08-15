import statusCodes from "http-status-codes";
import{successResponse , errorResponse} from "../Utils/Common/index.js";
import Apperror from "../Utils/Errors/app-errors.js";
function validateFlightCreateRequest(req,res,next)
{
    if(!req.body.flightNumber || !req.body.flightId || !req.body.departureAirportId || !req.body.arrivalAirportID || !req.body.airvalTime || !req.body.departureTime || !req.body.price|| !req.body.totalSeates)
    {
        errorResponse.message = "Something Went Wrong Creating Flight";
        
        errorResponse.error = new Apperror([{explanation : "Some Requested Data Not Found In The Incoming Data Form"} ],statusCodes.BAD_REQUEST );
        return res.status(statusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

export{
    validateFlightCreateRequest,

}