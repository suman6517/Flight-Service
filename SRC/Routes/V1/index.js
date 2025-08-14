import express  from "express";
import controllers from '../../Controllers/index.js';
import airPlaneController from "../V1/airplane-route.js"
import cityRoutes from "../V1/city-routes.js";
import airportRoutes from "../V1/airport-route.js";

const router = express.Router();

router.get("/info", controllers.info_Controller);

router.use("/airplanes" , airPlaneController);

router.use("/cities" , cityRoutes);
router.use("/airports" , airportRoutes);

export default router;