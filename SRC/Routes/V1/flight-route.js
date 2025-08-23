import express from "express";
import controllers from "../../Controllers/index.js";
import { validateFlightCreateRequest , validateSeatUpdateRequest} from "../../Middlewares/index.js";


const router = express.Router();

// api/v1/airport POST-Request
router.post("/", 
    validateFlightCreateRequest,
    controllers.creatFlight);

// GET-Request
router.get("/", controllers.getAllFlights);

router.get("/:id", controllers.getOneFlight);

router.patch('/:id/seats', validateSeatUpdateRequest,controllers.updateSeats);

export default router;