import * as service from "../services/rate_service.js";

const allRates = async (req, res, next) => {
    try {
        const rate = await service.rates();
        res.json({
            result: rate
        });
    } catch (error) {
        next(error);
    }
}

const storeRate = async(req, res, next) => {
    try {
        const response = await service.createRate(req.body);
        if(response) res.json({
            result: response,
        });
    } catch (error) {
        next(error);
    }
};

const updateRate = async(req, res, next) => {
    try {
        const response = await service.updateRate(req.params.id, req.body);
        if(response) res.json({
            result: response,
        });
    } catch (error) {
        next(error);
    }
};

const deleteRate = async(req, res, next) => {
    try {
        const response = await service.deleteRate(req.params.id);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    allRates,
    storeRate,
    updateRate,
    deleteRate
}