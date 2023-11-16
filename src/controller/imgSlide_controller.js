import * as service from "../services/imgSlide_service.js";

const allImgSlide = async (req, res, next) => {
    try {
        const imgSlide = await service.imgSlide();
        res.json({
            result: imgSlide,
        });
    } catch (error) {
        next(error);
    }
};

const storeImgSlide = async (req, res, next) => {
    try {
        const newImgSlide = await service.createImgSlide(req.body);
        if(imgSlide) res.json({
            result: newImgSlide,
        })
    } catch (error) {
        next(error);
    }
};

const updateImgSlide = async (req, res, next) => {
    try {
        const response = await service.updateImgSlide(req.params.id, req.body);
        if(response) res.json({
            result: response,
        })
    } catch (error) {
        next(error);
    }
};

const deleteImgSlide = async (req, res, next) => {
    try {
        const response = await service.deleteImgSlide(req.params.id);
        if(response) res.json({
            result: response,
        })
    } catch (error) {
        next(error);
    }
};

module.exports = {
    allImgSlide,
    storeImgSlide,
    updateImgSlide,
    deleteImgSlide
}