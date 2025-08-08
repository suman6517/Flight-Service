import {logger} from "../Config/index.js";

class CrudRepo{
    constructor(model)
    {
        this.model = model;
    }

    async create (data)
    {
        try 
        {
            
            const response = await this.model.create(data);
            return response;
            
        } 
        catch (error) 
        {
            logger.error('Something Went Wrong In Crud Repo : Create', error);
            throw error;
        }
    }

   async destroy (data)
    {
        try 
        {
            const response = await this.model.destroy(
                {
                    where:{
                        id:data
                    }
                }
            );
            return response;
            
        } catch (error) 
        {
            logger.error('Something Went Wrong In Crud Repo : Destory');
            throw error;
            
        }
    }

    async get (data)
    {
        try 
        {
            const response = await this.model.findByPk(data);
            return response;
            
        } 
        catch (error) 
        {
            logger.error('Something Went Wrong In Crud Repo : Get');
            throw error;
            
        }
    }


    async getAll ()
    {
        try 
        {
            const response = await this.model.findAll();
            return response;
            
        } 
        catch (error) 
        {
            logger.error('Something Went Wrong In Crud Repo : GetAll');
            throw error;
            
        }
    }

    async update (id,data) //(Data -> Object)
    {
        try 
        {
            const response = await this.model.update(data , {
               where:{
                      id:id
                    }
        });
            return response;
            
        } catch (error) 
        {
            logger.error('Something Went Wrong In Crud Repo : Update');
            throw error;
            
        }
    }
}

export default CrudRepo;