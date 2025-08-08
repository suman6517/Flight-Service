import{AirPlaneService } from "../Services/index.js"
import statusCodes from "http-status-codes";
import{successResponse , errorResponse} from "../Utils/Common/index.js";


/*

  POST:/airplanes
  data:- req.body{modeNumber , capacity}
*/


async function createAirPlane(req, res)
{
    try 
    {
        const airplane = await AirPlaneService.createAirPlane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        successResponse.data = airplane;
        return res.status(statusCodes.CREATED).json(successResponse);
        
    } 
    catch (error) 
    {
        errorResponse.message = "Something Went Wrong Creating Airplane";
        errorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        
    }
};

export{
    createAirPlane
}