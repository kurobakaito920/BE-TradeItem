import express from "express";
import commentController from "../controller/comment_controller.js"
const route = express.Router();

route.post("/createComment", commentController.storeComment);
route.get("/commentAPI", commentController.allComment);
route.put("/updateComment/:id", commentController.updateComment);
route.delete("/deleteComment/:id", commentController.deleteComment);
module.exports = route;