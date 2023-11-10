import express from "express";
import wardsController from "../controller/ward_controller.js"
const route = express.Router();

route.post("/createWard", wardsController.storeWard);
route.get("/wardAPI", wardsController.allWard);
route.put("/updateWard/:id", wardsController.updateWard);
route.delete("/deleteWard/:id", wardsController.deleteWard);
module.exports = route;