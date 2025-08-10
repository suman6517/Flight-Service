import statusCodes from "http-status-codes";
import{ errorResponse} from "../Utils/Common/index.js";
import Apperror from "../Utils/Errors/app-errors.js";
function validateCityCreateRequest(req,res,next)
{
    if(!req.body || !req.body.name)
    {
        errorResponse.message = "Something Went Wrong Creating City";
        
        errorResponse.error = new Apperror([{explanation : "Name Must Be There "} ],statusCodes.BAD_REQUEST );
        return res.status(statusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

export{
    validateCityCreateRequest,

}