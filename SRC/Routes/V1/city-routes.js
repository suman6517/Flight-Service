import express from "express";
import controllers from "../../Controllers/index.js";
const router = express.Router();


router.post("/",controllers.createCity);

export default router;