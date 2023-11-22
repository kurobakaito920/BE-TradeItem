import express from "express";
import orderController from "../controller/order_controller.js";
const route = express.Router();

route.post("/createOrder", orderController.storeOrder);
route.get("/orderAPI", orderController.allOrder);
route.put("/updateOrder/:id", orderController.updateOrder);
route.delete("/deleteOrder/:id", orderController.deleteOrder);

module.exports = route;