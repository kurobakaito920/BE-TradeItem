import express from "express";
import disController from "../controller/district_controller.js";
const route = express.Router();

route.get('/disAPI', disController.allDistrict);
route.post('/createDis', disController.storeDistrict);
route.put('/updateDis', disController.updateDistrict);
route.delete('/deleteDis', disController.deleteDistrict);

module.exports = route;