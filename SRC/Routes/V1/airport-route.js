import express from "express";
import controllers from "../../Controllers/index.js";
import { validateAirportCreateRequest } from "../../Middlewares/index.js";


const router = express.Router();

// api/v1/airport POST-Request
router.post("/", 
    validateAirportCreateRequest,
    controllers.createAirport);

// GET-Request
router.get("/", controllers.getAllAirport);

// api/v1/airport:id GET-Request
router.get("/:id", controllers.getOneAirport);

 // api/v1/airport:id Delete-Request
 router.delete("/:id", controllers.deleteAirport);


 // api/v1/airport:id PATCH-Request
 router.patch("/:id", controllers.updateAirport);

export default router;