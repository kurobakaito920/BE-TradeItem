import * as service from "../services/comment_service.js";

const allComment = async (req, res, next) => {
    try {
        const comments = await service.comment();
        res.json({
            result: comments
        })
    } catch (error) {
        next(error);
    }
}

const storeComment = async (req, res, next) => {
    try {
        const response = await service.createComment(req.body);
        res.json(response);
    } catch (error) {
        next(error);
    }
};

const updateComment = async (req, res, next) => {
    try {
        const response = await service.updateComment(req.params.id,req.body)
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

const deleteComment = async (req, res, next) => {
    try {
        const response = await service.deleteComment(req.params.id)
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    allComment,
    storeComment,
    updateComment,
    deleteComment
}