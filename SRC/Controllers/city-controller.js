import{CityService } from "../Services/index.js"
import statusCodes from "http-status-codes";
import{successResponse , errorResponse} from "../Utils/Common/index.js";

async function createCity(req, res)
{
    try 
    {
        const city = await CityService.createCity({
            name:req.body.name
        });
        successResponse.data = city;
        return res.status(statusCodes.CREATED).json(successResponse);
        
    } 
    catch (error) 
    {
        errorResponse.message = "Something Went Wrong Creating City";
        errorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        
    }
};
export{
    createCity,
    
}