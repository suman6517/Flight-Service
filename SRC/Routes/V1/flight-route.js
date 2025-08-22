import express from "express";
import controllers from "../../Controllers/index.js";
import { validateFlightCreateRequest } from "../../Middlewares/index.js";


const router = express.Router();

// api/v1/airport POST-Request
router.post("/", 
    validateFlightCreateRequest,
    controllers.creatFlight);

// GET-Request
router.get("/", controllers.getAllFlights);

router.get("/:id", controllers.getOneFlight);

export default router;