import * as service from "../services/order_service.js";

const allOrder = async (req, res, next) => {
    try {
        const order = await service.orders();
        res.json({
            result: order
        });
    } catch (error) {
        next(error);
    }
};

const storeOrder = async (req, res, next) => {
    try {
        const response = await service.createOrder(req.body);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

const updateOrder = async (req, res, next) => {
    try {
        const response = await service.updateOrder(req.params.id, req.body);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

const deleteOrder = async (req, res, res) => {
    try {
        const response = await service.deleteOrder(req.params.id);
        if(response) res.json({
            result: response
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    allOrder,
    storeOrder,
    updateOrder,
    deleteOrder
}