import express from "express";
import prodNewsController from "../controller/product_news_controller.js"
const route = express.Router();

route.post("/createProdNews", prodNewsController.storeProdNews);
route.get("/prodNewsAPI", prodNewsController.allProdNews);
route.put("/updateProdNews/:id", prodNewsController.updateProdNews);
route.delete("/deleteProdNews/:id", prodNewsController.deleteProdNews);
module.exports = route;