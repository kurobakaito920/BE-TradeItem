import * as services from "../services/permission_service.js";

const allPermission = async (req, res, next) => {
    try {
        const permissions = await services.permission();
        res.json({
            result: permissions,
        });
    } catch (error) {
        next(error);
    }
};

const storePermission = async (req, res, next) => {
    try {
        const newPer = await services.createPer(req.body);
        if(newPer) res.json({
            result: newPer
        })
    } catch (error) {
        next(error);
    }
};

const updatePermisson = async (req, res, next) => {
    try {
        const response = await services.updatePer(req.params.id, req.body);
        if(response) res.json({
            result: response
        })
    } catch (error) {
        next(error);
    }
};

const deletePermission = async (req, res, next) => {
    try {
        const response = await services.deletePer(req.params.id);
        if(response) res.json({
            result: response
        })
    } catch (error) {
        next(error);
    }
};

module.exports = {
    allPermission,
    storePermission,
    updatePermisson,
    deletePermission
}