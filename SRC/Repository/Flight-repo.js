import CrudRepo from "./crud-repo.js";
import db from "../models/index.js";

class FlightRepository extends CrudRepo{

    constructor()
    {
         super(db.Flight);
        
    }
} 
export default FlightRepository;