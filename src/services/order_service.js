import db from "../models/index.js";

const orders = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const order = await db.Orders.findAll({
                include:[
                    {
                        model: db.Users,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"],
                        }
                    },
                    {
                        model: db.Products,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        },
                    }
                ],
                attributes: {
                    exclude: ["createdAt", "updatedAt","userID", "productID"],
                }
            })
            resolve(order);
        } catch (error) {
            reject(error);
        }
    });
};

const createOrder = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Orders.create({
                id: data.id,
                userID: data.userID,
                producID: data.producID
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Created" : "Order has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateOrder = (oid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Orders.update({
                userID: data.userID,
                productID: data.producID
            },{
                where: {id: oid}
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Updated" : "Order has been updated",
              });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteOrder = (oid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Orders.destroy({
                where: {id: oid}
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Deleted" : "Orders has been deleted",
              });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    orders,
    createOrder,
    updateOrder,
    deleteOrder
}