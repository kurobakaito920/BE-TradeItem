import * as services from "../services/subcate_service.js";
import db from "../models/index.js";

const allSubCate = async (req, res, next) => {
    try {
        const subCate = await services.subcate();
        res.json({
            result: subCate,
        })
    } catch (error) {
        next(error);
    }
}

const storeSubCate = async (req, res, next) => {
    try {
        const newSubCate = await services.createSubCate(req.body);
        if(newSubCate) res.json({
            result: newSubCate,
        })
    } catch (error) {
        next(error);
    }
};

const updateSubCate = async (req, res, next) => {
    try {
        const response = await services.updateSubCate(req.params.id, req.body);
        if(response) {
            res.json({
                result: response,
            })
        }
    } catch (error) {
        next(error);
    }
}

const deleteSubCate = async (req, res, next) => {
    try {
        const response = await services.deleteSubCate(req.params.id);
        if(response){
            res.status(200).json({
                status: 200,
                message: "subCategory was deleted",
            })
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    allSubCate,
    storeSubCate,
    updateSubCate,
    deleteSubCate,
}