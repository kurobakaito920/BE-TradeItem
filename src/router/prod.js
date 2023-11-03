import express from "express";
import productController from "../controller/product_controller.js"
const route = express.Router();

route.post("/createProd", productController.storePro);
route.get("/prodAPI", productController.allPro);
route.put("/updateProd/:id", productController.updatePro);
route.delete("/deleteProd/:id", productController.deletePro);
module.exports = route;