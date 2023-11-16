import express from "express";
import imgSlideController from "../controller/imgSlide_controller.js"
const route = express.Router();

route.post("/createslider", imgSlideController.storeImgSlide);
route.get("/slideAPI", imgSlideController.allImgSlide);
route.put("/updateSlide/:id", imgSlideController.updateImgSlide);
// route.post("/login", userController.loginUser);
route.delete("/deleteSlide/:id", imgSlideController.deleteImgSlide);
module.exports = route;