import express from "express";
import newsFavorController from "../controller/news_favorite_controller.js"
const route = express.Router();

route.post("/createNewsFavor", newsFavorController.storeNewsFavor);
route.get("/newsFavorAPI", newsFavorController.allNewsFavor);
route.put("/updateNewsFavor/:id", newsFavorController.updateNewsFavor);
route.delete("/deleteNewsFavor/:id", newsFavorController.deleteNewsFavor);
module.exports = route;