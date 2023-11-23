import express from "express";
import rateController from "../controller/rate_controller.js";
const route = express.Router();

route.post("/createRate", rateController.storeRate);
route.get("/rateAPI", rateController.allRates);
route.put("/updateRate/:id", rateController.updateRate);
route.delete("/deleteRate/:id", rateController.deleteRate);

module.exports = route;