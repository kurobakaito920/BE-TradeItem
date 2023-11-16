import * as service from "../services/news_service.js";

const allNews = async (req, res, next) => {
    try {
        const news = await service.news();
        res.json({
            result: news,
        })
    } catch (error) {
        next(error);
    }
};

const storeNews = async (req, res, next) => {
    try {
        const newNews = await service.createNews(req.body);
        if (newNews) res.json({
            result: newNews
        })
    } catch (error) {
        next(error);
    }
};

const updateNews = async (req, res, next) => {
    try {
        const response = await service.updateNews(req.params.id, req.body);
        if (response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

const deleteNews = async (req, res, next) => {
    try {
        const response = await service.deleteNews(req.params.id);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    allNews,
    storeNews,
    updateNews,
    deleteNews
};