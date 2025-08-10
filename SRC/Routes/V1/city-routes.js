import express from "express";
import controllers from "../../Controllers/index.js";
import { validateCityCreateRequest } from "../../Middlewares/index.js";
const router = express.Router();


router.post("/",validateCityCreateRequest, controllers.createCity);

export default router;