import express from "express";
import locationController from "../controller/location_controller.js";
const route = express.Router();

route.post("/createLocation", locationController.storeLocation);
route.get("/locationAPI", locationController.allLocation);
route.put("/updateLocation/:id", locationController.updateLocation);
route.delete("/deleteLocation/:id", locationController.deleteLocation);
module.exports = route;