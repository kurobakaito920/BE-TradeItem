import express from "express";
import subCateController from "../controller/subcategory_controller.js";
const route = express.Router();

route.post("/createSubCate", subCateController.storeSubCate);
route.get("/subCateAPI", subCateController.allSubCate);
route.put("/updateSubCate/:id", subCateController.updateSubCate);
route.delete("/deleteSubCate/:id", subCateController.deleteSubCate);

module.exports = route;