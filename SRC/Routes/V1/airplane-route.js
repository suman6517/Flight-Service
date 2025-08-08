import exprress from "express";
import controllers from "../../Controllers/index.js";
import { validateCreateRequest } from "../../Middlewares/index.js";


const router = exprress.Router();

// api/v1/airplanes POST-Request
router.post("/", 
    validateCreateRequest,
    controllers.createAirPlane);

// GET-Request
router.get("/", controllers.getAllAirplane);

export default router;