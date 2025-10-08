import express, { Router } from "express";
import v1Routes from "./V1/index.js";

const router = express.Router();

console.log("👉 Mounted /v1");
router.use('/v1' , v1Routes);


export default router; 

