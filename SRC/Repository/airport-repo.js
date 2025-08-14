import CrudRepo from "./crud-repo.js";
import db from "../models/index.js";

class AirportRepository extends CrudRepo{

    constructor()
    {
         super(db.Airport);
        
    }
} 
export default AirportRepository;