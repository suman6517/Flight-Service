import expres from "express";
import controllers from '../../Controllers/index.js';
import airPlaneController from "../V1/airplane-route.js"


const router = expres.Router();

router.get("/info", controllers.info_Controller);

router.use("/airplanes" , airPlaneController);

export default router;