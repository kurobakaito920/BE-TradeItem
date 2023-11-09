import * as service from "../services/district_service.js";

const allDistrict = async (req, res, next) => {
    try {
        const district = await service.district();
        res.json({
            result: district
        });
    } catch (error) {
        next(error);
    }
};

const storeDistrict = async (req, res, next) => {
    try {
        const newDistrict = await service.createDistrict(req.body);
        if(newDistrict) res.json({
            result: newDistrict
        })
    } catch (error) {
        next(error);
    }
};

const updateDistrict = async (req, res, next) => {
    try {
        const response = await service.updateDistrict(req.params.id, req.body);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

const deleteDistrict = async (req, res, next) => {
    try {
        const response = await service.deleteDistrict(req.params.id);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    allDistrict,
    storeDistrict,
    updateDistrict,
    deleteDistrict,
}