import express from "express";
import cateController from "../controller/category_controller.js"
const route = express.Router();

route.post("/createCate", cateController.storeCate);
route.get("/cateAPI", cateController.allCate);
route.put("/updateCate/:id", cateController.updateCate);
// route.post("/login", userController.loginUser);
route.delete("/deleteCate/:id", cateController.deleteCate);
module.exports = route;