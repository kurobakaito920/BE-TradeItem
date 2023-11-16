import express from "express";
import perController from "../controller/permission_controller.js";
const route = express.Router();

route.get('/perAPI', perController.allPermission);
route.post('/createPer', perController.storePermission);
route.put('/updatePer/:id', perController.updatePermission);
route.delete('/deletePer/:id', perController.deletePermission);

module.exports = route;