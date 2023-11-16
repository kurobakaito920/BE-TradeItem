import express from "express";
import newsController from "../controller/news_controller.js";
const route = express.Router();

route.post("/createNews", newsController.storeNews);
route.get("/newsAPI", newsController.allNews);
route.put("/updateNews/:id", newsController.updateNews);
route.delete("/deleteNews/:id", newsController.deleteNews);
module.exports = route;