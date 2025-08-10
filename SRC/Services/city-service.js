import {CityRepository} from "../Repository/index.js";
import Apperror from "../Utils/Errors/app-errors.js";
import statusCodes from "http-status-codes";

const CityRepo = new CityRepository();
async function createCity(data) 
{
    try 
    {   
        const city = await CityRepo.create(data);
        return city;
        
    } 
    catch (error) 
    {
       
        
       if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError')   // SequalizeValidationError Is a Type oF error Like User give the wrong data or wrong data type 
       {                                                                                                  // or they give the data in a Wrong Format;
        let explanation = [];
        error.errors.forEach(err=>{
            explanation.push(err.message);
            console.log(explanation);
        });
        throw new Apperror(explanation,statusCodes.BAD_REQUEST);
       }

      throw new Apperror("Can not create a new City Object",statusCodes.INTERNAL_SERVER_ERROR );
    }
};


async function deleteCityService(id) 
{
   try {
     const deletedCity = await CityRepo.destroy(id);
     return deletedCity;


   } 
   catch (error) 
   {
    if (error.statusCode === statusCodes.NOT_FOUND)
        {
            throw new Apperror("The City You Requested Is Not Present In Our Side " , error.statusCode);
        }
        throw new Apperror("Can not able to Delete the City", statusCodes.INTERNAL_SERVER_ERROR);
   }
};
async function updateCity(id,data) 
{
    try 
    {
        const updatedCity = await CityRepo.update(id,data);
        return updatedCity;   
    } 
    catch (error) 
    {
        if(error.statusCode == statusCodes.NOT_FOUND)
        {
            throw new Apperror("The City Is Not Exist In Our Side Try Later",error.statusCode);
        }
        throw new Apperror("Can not update the City You Requested",statusCodes.INTERNAL_SERVER_ERROR);
    }   
};


export const CityService = 
{
    createCity,
    deleteCityService,
    updateCity,



}