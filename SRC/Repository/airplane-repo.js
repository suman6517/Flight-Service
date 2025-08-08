import CrudRepo from "./crud-repo.js";
import db from "../models/index.js";
class AirplaneRepo extends CrudRepo{
    constructor()
    {
         super(db.Airplane);
        
    }
} 
export default AirplaneRepo;