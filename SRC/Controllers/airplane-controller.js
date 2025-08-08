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

async function getAllAirplane(req,res) 
{
    try 
    {
        const airplanes = await AirPlaneService.getAirPlane();
        successResponse.data = airplanes;
        return res.status(statusCodes.OK).json(successResponse);
    } 
     catch (error) 
    {
        errorResponse.message = "Something Went Wrong Getting Airplanes";
        errorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        
    }
    
}
async function getOneAirplane(req,res) 
{
    try 
    {
        const airplane = await AirPlaneService.getOneAirplane(req.params.id);
        successResponse.data = airplane;
        return res.status(statusCodes.OK).json(successResponse);

    } 
    catch (error)
    {
        errorResponse.message = "Something Went Wrong Getting Airplanes By Id";
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
        
    }
    
}

async function deleteAirplane(req , res) 
{
    try 
    {
        const airplane = await AirPlaneService.deleteAirplane(req.params.id);
        successResponse.data = airplane;
        return res.status(statusCodes.OK).json(successResponse);
        
    } 
    catch (error) 
    {
        errorResponse.message = "Can not delete the Airplane";
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
        
    }
    
}

export{
    createAirPlane,
    getAllAirplane,
    getOneAirplane,
    deleteAirplane
}