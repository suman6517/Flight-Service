import CrudRepo from "./crud-repo.js";
import db from "../models/index.js";

class CityRepository extends CrudRepo{

    constructor()
    {
         super(db.City);
        
    }
} 
export default CityRepository;