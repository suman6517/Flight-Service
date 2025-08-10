import {AirplaneRepo} from "../Repository/index.js";
import Apperror from "../Utils/Errors/app-errors.js";
import statusCodes from "http-status-codes";

const airplaneRepo = new AirplaneRepo();


async function createAirPlane(data)
{
    try 
    {
        const airplane = await airplaneRepo.create(data);
        return airplane;
        
    } catch (error) 
    {
       if(error.name == 'SequalizeValidationError')   // SequalizeValidationError Is a Type oF error Like User give the wrong data or wrong data type or they give the data in a Wrong Format;
       {
        let explanation = [];
        error.errors.foreach(err=>{
            explanation.push(err.message);
            console.log(explanation);
        });
        throw new Apperror(explanation,statusCodes.BAD_REQUEST);
       }

      throw new Apperror("Can not create a new Airplane Object",statusCodes.INTERNAL_SERVER_ERROR );
    }
};;

async function getAirPlane() 
{
    try 
    {
        const airplanes = await airplaneRepo.getAll();
        return airplanes;
    } 
    catch (error) 
    {
        throw new Apperror("Can not Fetch all the data from Airplnes",statusCodes.INTERNAL_SERVER_ERROR );
        
    }
    
};
async function getOneAirplane(data) 
{
    try 
    {
        const airplane = await airplaneRepo.getOne(data);
        return airplane;
        
    } 
    catch (error) 
    {
        if(error.statusCode == statusCodes.NOT_FOUND)
        {
            throw new Apperror("The Airplane You Requested Is Not Present" , error.statusCode);
        }
        throw new Apperror("Can not Fetch all the data from Airplnes",statusCodes.INTERNAL_SERVER_ERROR );
    }    
};

async function deleteAirplane(id) 
{
    try 
    {
         const deletedAirplane = await airplaneRepo.destroy(id);
         return deletedAirplane;
        
    } 
    catch (error) 
    {
        if(error.statusCode == statusCodes.NOT_FOUND)
        {
            throw new Apperror("The Airplane You Requested Is Not Present In Our Side " , error.statusCode);
        }
        throw new Apperror("Can not Delete The Airoplane",statusCodes.INTERNAL_SERVER_ERROR );
    }
};

async function updateAirplane(id,data) 
{
    try 
    {
        const updateAirPlane = await airplaneRepo.update(id,data);
        return updateAirPlane;   
    } 
    catch (error) 
    {
        if(error.statusCode == statusCodes.NOT_FOUND)
        {
            throw new Apperror("The Airplane Is Not Exist In Our Side Try Later",error.statusCode);
        }
        throw new Apperror("Can not update the Airplane You Requested",statusCodes.INTERNAL_SERVER_ERROR);
    }   
}


export const AirPlaneService ={
    createAirPlane,
    getAirPlane,
    getOneAirplane,
    deleteAirplane,
    updateAirplane,



}