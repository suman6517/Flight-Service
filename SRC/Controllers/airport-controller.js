import{AirportService } from "../Services/index.js"
import statusCodes from "http-status-codes";
import{successResponse , errorResponse} from "../Utils/Common/index.js";


/*

  POST:/airport
*/


async function createAirport(req, res)
{
    try 
    {
        const airport = await AirportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId

        });
        successResponse.data = airport;
        return res.status(statusCodes.CREATED).json(successResponse);
        
    } 
    catch (error) 
    {
        errorResponse.message = "Something Went Wrong Creating Airport";
        errorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        
    }
};

async function getAllAirport(req,res) 
{
    try 
    {
        const airport = await AirportService.getAirport();
        successResponse.data = airport;
        return res.status(statusCodes.OK).json(successResponse);
    } 
     catch (error) 
    {
        errorResponse.message = "Something Went Wrong Getting Airports";
        errorResponse.error = error;
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        
    }
    
};
async function getOneAirport(req,res) 
{
    try 
    {
        const airport = await AirportService.getOneAirport(req.params.id);
        successResponse.data = airport;
        return res.status(statusCodes.OK).json(successResponse);

    } 
    catch (error)
    {
        errorResponse.message = "Something Went Wrong Getting Airport By Id";
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
        
    }
    
};

async function deleteAirport(req , res) 
{
    try 
    {
        const airport = await AirportService.deleteAirport(req.params.id);
        successResponse.data = airport;
        return res.status(statusCodes.OK).json(successResponse);
        
    } 
    catch (error) 
    {
        errorResponse.message = "Can not delete the Airport";
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
        
    }
    
};
async function updateAirport(req , res)
{
    try 
    {
        const airport = await AirportService.updateAirport(req.params.id, req.body);
        successResponse.data = airport;
        return res.status(statusCodes.OK).json(successResponse);
        
    } 
    catch (error) 
    {
        errorResponse.message = "Can not update The Airport Details";
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
        
    }
}

export{
    createAirport,
    getAllAirport,
    getOneAirport,
    deleteAirport,
    updateAirport
}