import * as services from '../services/ward_service';

const allWard = async (req, res, next) => {
    try {
        const ward = await services.ward();
        res.json({
            result: ward,
        });
    } catch (error) {
        next(error);
    }
};

const storeWard = async (req, res, next) => {
    try {
        const newWard = await services.createWard(req.body);
        if(newWard) res.json({
            result: newWard
        });
    } catch (error) {
        next(error);
    }
};

const updateWard = async (req, res, next) => {
    try {
        const response = await services.updateWard(req.params.id, req.body);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

const deleteWard = async (req, res, next) => {
    try {
        const response = await services.deleteWard(req.params.id);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    allWard,
    storeWard,
    updateWard,
    deleteWard,
}