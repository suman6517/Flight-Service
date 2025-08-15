import express from "express";
import controllers from "../../Controllers/index.js";
import { validateFlightCreateRequest } from "../../Middlewares/index.js";


const router = express.Router();

// api/v1/airport POST-Request
router.post("/", 
    validateFlightCreateRequest,
    controllers.creatFlight);

export default router;