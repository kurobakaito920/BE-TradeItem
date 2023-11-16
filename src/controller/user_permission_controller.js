import * as service from "../services/userPermission_service.js";

const allUserPer = async (req, res, next) => {
    try {
        const userPer = await service.userPer();
        res.json({
            result: userPer,
        })
    } catch (error) {
        next(error);
    }
};

const storeUserPer = async (req, res, next) => {
    try {
        const newUserPer = await service.createUserPer(req.body);
        if(newUserPer) res.json({
            result: newUserPer
        })
    } catch (error) {
        next(error);
    }
};

const updateUserPer = async (req, res, next) => {
    try {
        const response = await service.updateUserPer(req.params.id, req.body);
        if(response) res.json({
            result: response
        })
    } catch (error) {
        next(error);
    }
};

const deleteUserPer = async (req, res, next) => {
    try {
        const response = await service.deleteUserPer(req.params.id);
        if(response) res.json({
            result: response
        })
    } catch (error) {
        next(error);
    }
};  

module.exports = {
    allUserPer,
    storeUserPer,
    updateUserPer,
    deleteUserPer
}