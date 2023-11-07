import * as service from "../services/city_service.js";

const allCity = async (req, res, next) => {
    try {
        const city = await service.cities();
        res.json({
            result: city,
        })
    } catch (error) {
        next(error);
    }
};

const storeCity = async (req, res, next) => {
    try {
        const newCity = await service.createCity(req.body);
        if(newCity) res.json({
            result: newCity
        });
    } catch (error) {
        next(error);
    }
};

const updateCity = async (req, res, next) => {
    try {
        const response = await service.updateCity(req.params.id, req.body);
        if(response) res.json({
            result: response,
        });
    } catch (error) {
        next(error);
    }
};

const deleteCity = async (req, res, next) => {
    try {
        const response = await service.deleteCity(req.params.id);
        if(response) res.json({
            result: response
        })
    } catch (error) {
        next(error);
    }
};

module.exports = {
    allCity,
    storeCity,
    updateCity,
    deleteCity
}