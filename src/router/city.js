import express from "express";
import citiesController from "../controller/city_controller.js"
const route = express.Router();

route.post("/createCities", citiesController.storeCity);
route.get("/citiesAPI", citiesController.allCity);
route.put("/updateCity/:id", citiesController.updateCity);
route.delete("/deleteCity/:id", citiesController.deleteCity);
module.exports = route;