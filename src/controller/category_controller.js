import * as service from "../services/category_service.js";
import db from "../models/index.js";

const allCate = async (req, res, next) => {
    try {
        const cate = await service.cate();
        res.json({
            result: cate,
        });
    } catch (error) {
        next(error);
    }
}

const storeCate = async (req, res, next) => {
    try {
        const newCate = await service.createCate(req.body);
        if(newCate) res.json({
            message: "success"
        })
    } catch (error) {
        next(error);
    }
}

const updateCate = async (req, res, next) => {
    try {
        const response = await service.updateCate(req.params.id, req.body);
        if(response) res.json({
            message: "update success",
        })
    } catch (error) {
        next(error);
    }
}

const deleteCate = async (req, res, next) => {
    try {
        const response = await service.deleteCate(req.params.id);
        if(response){
            res.status(200).json({
                status: 200,
                message: "Category was deleted",
            })
        }
    } catch (error) {
        next(error);   
    }
}

module.exports = {
    allCate,
    storeCate,
    updateCate,
    deleteCate,
}