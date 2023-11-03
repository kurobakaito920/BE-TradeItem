import db from "../models/index.js";

const cate = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const ctgr = await db.Categories.findAll();
            resolve(ctgr);
        } catch (error) {
            reject(error);
        }
    });
}

const createCate = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Categories.findOrCreate({
                where: {
                    nameCategory: data.nameCategory,
                },
                defaults:{
                    id: data.id,
                    nameCategory: data.nameCategory,
                }
            });
            resolve({
                status: response[1] ? 0 : 1,
                msg: response[1] ? "Created" : "Category has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateCate = ({cid, ...data}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Categories.update(data, {
                where: {id: cid},
            });
            resolve({
                err: response[0] > 0 ? 0 : 1,
                mes:
                  response[0] > 0
                    ? `${response[0]} Categories updated`
                    : "Cannot update new categories/ categories ID not found",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const deleteCate = (cid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Categories.destroy({
                where: {id: cid},
            });
            resolve({
                err: response > 0 ? 0 : 1,
                mes: `${response} deleted`,
            });
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    cate,
    createCate,
    updateCate,
    deleteCate,
}