import {validateCreateRequest} from "./airplane-middleware.js";
import {validateCityCreateRequest} from "./city-middleware.js"
import{validateAirportCreateRequest} from "./airport-middleware.js"
import{validateFlightCreateRequest} from "./flight-middleware.js"

export{
    validateCreateRequest,
    validateCityCreateRequest,
    validateAirportCreateRequest,
    validateFlightCreateRequest
}