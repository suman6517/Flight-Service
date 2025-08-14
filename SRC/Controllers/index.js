import info_Controller from "./info-controller.js";
import {createAirPlane , deleteAirplane, getAllAirplane , getOneAirplane , updateAirplane} from "./airplane-controller.js";
import {createCity , deleteCity, updateCity} from "./city-controller.js";
import { createAirport,deleteAirport,getAllAirport,getOneAirport,updateAirport } from "./airport-controller.js";
export default {
    info_Controller,
    createAirPlane,
    getAllAirplane,
    getOneAirplane,
    deleteAirplane,
    updateAirplane,

    // The City Controllers Export
    createCity,
    deleteCity,
    updateCity,

    // Airport Controller
    createAirport,
    deleteAirport,
    getAllAirport,
    getOneAirport,
    updateAirport,

    


}