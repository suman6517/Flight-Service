import exprress from "express";
import controllers from "../../Controllers/index.js";
import { validateCreateRequest } from "../../Middlewares/index.js";


const router = exprress.Router();

// api/v1/airplanes
router.post("/", 
    validateCreateRequest,
    controllers.createAirPlane);

export default router;