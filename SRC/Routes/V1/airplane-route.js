import express from "express";
import controllers from "../../Controllers/index.js";
import { validateCreateRequest } from "../../Middlewares/index.js";


const router = express.Router();

// api/v1/airplanes POST-Request
router.post("/", 
    validateCreateRequest,
    controllers.createAirPlane);

// GET-Request
router.get("/", controllers.getAllAirplane);

// api/v1/airplanes:id GET-Request
router.get("/:id", controllers.getOneAirplane);

 // api/v1/airplanes:id Delete-Request
 router.delete("/:id", controllers.deleteAirplane);

 // api/v1/airplanes:id PATCH-Request
 router.patch("/:id", controllers.updateAirplane);

export default router;