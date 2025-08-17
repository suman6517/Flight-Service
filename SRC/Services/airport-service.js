import {AirportRepository} from "../Repository/index.js";
import Apperror from "../Utils/Errors/app-errors.js";
import statusCodes from "http-status-codes";

const airportRepo = new AirportRepository();


async function createAirport(data)
{
    try 
    {
        const airport = await airportRepo.create(data);
        return airport;
        
    } catch (error) 
    {
       if(error.name == 'SequalizeValidationError')   // SequalizeValidationError Is a Type oF error Like User give the wrong data or wrong data type or they give the data in a Wrong Format;
       {
        let explanation = [];
        error.errors.forEach(err=>{
            explanation.push(err.message);
            console.log(explanation);
        });
        throw new Apperror(explanation,statusCodes.BAD_REQUEST);
       }

      throw new Apperror("Can not create a new Airport Object",statusCodes.INTERNAL_SERVER_ERROR );
    }
};;

async function getAirport() 
{
    try 
    {
        const airport = await airportRepo.getAll();
        return airport;
    } 
    catch (error) 
    {
        throw new Apperror("Can not Fetch all the data from Airports",statusCodes.INTERNAL_SERVER_ERROR );
        
    }
    
};
async function getOneAirport(data) 
{
    try 
    {
        const airport = await airportRepo.getOne(data);
        return airport;
        
    } 
    catch (error) 
    {
        if(error.statusCode == statusCodes.NOT_FOUND)
        {
            throw new Apperror("The Airport You Requested Is Not Present" , error.statusCode);
        }
        throw new Apperror("Can not Fetch all the data from Airports",statusCodes.INTERNAL_SERVER_ERROR );
    }    
};

async function deleteAirport(id) 
{
    try 
    {
         const deletedairport = await airportRepo.destroy(id);
         return deletedairport;
        
    } 
    catch (error) 
    {
        if(error.statusCode == statusCodes.NOT_FOUND)
        {
            throw new Apperror("The  Airport You Requested Is Not Present In Our Side " , error.statusCode);
        }
        throw new Apperror("Can not Delete The Airport",statusCodes.INTERNAL_SERVER_ERROR );
    }
};

async function updateAirport(id,data) 
{
    try 
    {
        const updateairport = await airportRepo.update(id,data);
        return  updateairport;   
    } 
    catch (error) 
    {
        if(error.statusCode == statusCodes.NOT_FOUND)
        {
            throw new Apperror("The Airport Is Not Exist In Our Side Try Later",error.statusCode);
        }
        throw new Apperror("Can not update the Airport You Requested",statusCodes.INTERNAL_SERVER_ERROR);
    }   
};


export const AirportService ={
    createAirport,
    getAirport,
    getOneAirport,
    deleteAirport,
    updateAirport,



}