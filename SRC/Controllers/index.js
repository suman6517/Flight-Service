import info_Controller from "./info-controller.js";
import {createAirPlane , deleteAirplane, getAllAirplane , getOneAirplane , updateAirplane} from "./airplane-controller.js";
import {createCity , deleteCity} from "./city-controller.js";
export default {
    info_Controller,
    createAirPlane,
    getAllAirplane,
    getOneAirplane,
    deleteAirplane,
    updateAirplane,

    // The City Controllers Export
    createCity,
    deleteCity
    
}