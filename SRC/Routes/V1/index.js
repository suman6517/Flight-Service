import expres from "express";
import controllers from '../../Controllers/index.js';
import airPlaneController from "../V1/airplane-route.js"
import cityRoutes from "../V1/city-routes.js";

const router = expres.Router();

router.get("/info", controllers.info_Controller);

router.use("/airplanes" , airPlaneController);

router.use("/cities" , cityRoutes);

export default router;