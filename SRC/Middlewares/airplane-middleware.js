import statusCodes from "http-status-codes";
import{successResponse , errorResponse} from "../Utils/Common/index.js";
import Apperror from "../Utils/Errors/app-errors.js";
function validateCreateRequest(req,res,next)
{
    if(!req.body.modelNumber)
    {
        errorResponse.message = "Something Went Wrong Creating Airplane";
        
        errorResponse.error = new Apperror([{explanation : "Model Number Not Found In The Incoming Data Form"} ],statusCodes.BAD_REQUEST );
        return res.status(statusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

export{
    validateCreateRequest,

}