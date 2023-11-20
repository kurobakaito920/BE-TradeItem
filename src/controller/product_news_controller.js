import * as service from "../services/product_news_service.js";

const allProdNews = async (req, res, next) => {
    try {
        const prodNews = await service.productNews();
        res.json({
            result: prodNews
        })
    } catch (error) {
        next(error);
    }
};

const storeProdNews = async (req, res, next) => {
    try {
        const newProdNews = await service.createProdNews(req.body);
        if(newProdNews) res.json({
            result: newProdNews
        });
    } catch (error) {
        next(error);        
    }
};

const updateProdNews = async (req, res, next) => {
    try {
        const response = await service.updateProdNews(req.params.id, req.body);
        if(response) res.json({
            result: response
        })
    } catch (error) {
        next(error);
    }
};

const deleteProdNews = async (req, res, next) => {
    try {
        const response = await service.deleteProdNews(req.params.id);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    allProdNews,
    storeProdNews,
    updateProdNews,
    deleteProdNews
}