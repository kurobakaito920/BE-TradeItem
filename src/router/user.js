import express from "express";
import userController from "../controller/user_controller.js"
const route = express.Router();

route.post("/createUser", userController.createUser);
route.get("/userAPI", userController.allUser);
route.post("/login", userController.loginUser);
route.delete("/deleteUser/:id", userController.deletedUser);
module.exports = route;