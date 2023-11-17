import * as service from "../services/location_service.js";

const allLocation = async (req, res, next) => {
    try {
        const location = await service.locations();
        res.json({
            result: location,
        })
    } catch (error) {
        next(error);
    }
};

const storeLocation = async (req, res, next) => {
    try {
        const newLocation = await service.createLocation(req.body);
        if(newLocation) res.json({
            result: newLocation
        })
    } catch (error) {
        next(error);
    }
};

const updateLocation = async (req, res, next) => {
    try {
        const response = await service.updateLocation(req.params.id, req.body);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

const deleteLocation = async (req, res, next) => {
    try {
        const response = await service.deleteLocation(req.params.id);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    allLocation,
    storeLocation,
    updateLocation,
    deleteLocation
}