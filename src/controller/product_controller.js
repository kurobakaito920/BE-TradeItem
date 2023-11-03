import * as service from "../services/product_service.js";
import db from "../models/index.js";

const allPro = async(req, res, next) => {
    try {
        const pro = await service.product();
        res.json({
            result: pro,
        })
    } catch (error) {
        next(error);
    }
}

const storePro = async(req, res, next) => {
    try {
        const newPro = await service.createProduct(req.body);
        if(newPro) res.json({
            result: newPro,
        });
    } catch (error) {
        next(error);
    }
}

const updatePro = async(req, res, next) => {
    try {
        const response = await service.updateProduct(req.params.id, req.body);
        if(response){
            res.json({
                result: response
            })
        }
    } catch (error) {
        next(error);
    }
}

const deletePro = async(req, res, next) => {
    try {
        const response = await service.deleteProduct(req.params.id);
        if(response){
            res.json({
                result: response
            })
        }
    } catch (error) {
        next(error);
    }
}
module.exports = {
    allPro,
    storePro,
    updatePro,
    deletePro,
}