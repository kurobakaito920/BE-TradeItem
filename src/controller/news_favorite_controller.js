import * as service from "../services/news_favorite_service.js";

const allNewsFavor = async (req, res, next) => {
    try {
        const newsFavor = await service.newsFavorite();
        res.json({
            result: newsFavor
        });
    } catch (error) {
        next(error);
    }
}

const storeNewsFavor = async (req, res, next) => {
    try {
        const response = await service.createNewsFavor(req.body);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

const updateNewsFavor = async (req, res, next) => {
    try {
        const response = await service.updateNewsFavor(req.params.id, req.body);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

const deleteNewsFavor = async (req, res, next) => {
    try {
        const response = await service.deleteNewsFavor(req.params.id);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    allNewsFavor,
    storeNewsFavor,
    updateNewsFavor,
    deleteNewsFavor
}