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

async function deleteCity(req, res)
{
    try 
    {
        const city = await CityService.deleteCityService(req.params.id);
        successResponse.data = city;
        return res.status(statusCodes.OK).json(successResponse);
        
    } 
    catch (error) 
    {
        errorResponse.message = "Something Went Wrong Deleting City";
        errorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        
    }
};

async function updateCity(req , res)
{
    try 
    {
        const city = await CityService.updateCity(req.params.id, req.body);
        successResponse.data = city;
        return res.status(statusCodes.OK).json(successResponse);
        
    } 
    catch (error) 
    {
        errorResponse.message = "Can not update The City Details";
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
        
    }
};

export{
    createCity,
    deleteCity,
    updateCity,
}