import express from "express";
import userPerController from "../controller/user_permission_controller.js"
const route = express.Router();

route.post("/createUserPer",userPerController.storeUserPer );
route.get("/userPerAPI", userPerController.allUserPer);
route.put("/updateUserPer/:id", userPerController.updateUserPer);
route.delete("/deleteUserPer/:id", userPerController.deleteUserPer);
module.exports = route;