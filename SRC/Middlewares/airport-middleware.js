import statusCodes from "http-status-codes";
import{successResponse , errorResponse} from "../Utils/Common/index.js";
import Apperror from "../Utils/Errors/app-errors.js";
function validateAirportCreateRequest(req,res,next)
{
    if(!req.body.name || !req.body.code || !req.body.cityId)
    {
        errorResponse.message = "Something Went Wrong Creating Airport";
        
        errorResponse.error = new Apperror([{explanation : "Some Requested Data Not Found In The Incoming Data Form"} ],statusCodes.BAD_REQUEST );
        return res.status(statusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

export{
    validateAirportCreateRequest,

}