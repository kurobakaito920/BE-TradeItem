import db from "../models/index.js";

const subcate = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const subctgr = await db.subCategories.findAll({
                include:{
                    model: db.Categories,
                    attributes:{
                        exclude: ["createdAt", "updatedAt"]
                    }
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt","categoryID"]
                }
            });
            resolve(subctgr);
        } catch (error) {
            reject(error);
        }
    });
}

const createSubCate = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.subCategories.findOrCreate({
                where: {
                    nameSubCategory: data.nameSubCategory 
                },
                defaults: {
                    id: data.id,
                    categoryID: data.categoryID,
                    nameSubCategory: data.nameSubCategory,
                }
            });
            resolve({
                status: response[1] ? 0 : 1,
                msg: response[1] ? "Created" : "subCategory has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateSubCate = (scid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.subCategories.update({categoryID: data.categoryID, nameSubCategory: data.nameSubCategory}, {
                where: {
                    id: scid,
                }
            });
            resolve({
                err: response[0] > 0 ? 0 : 1,
                mes:
                  response[0] > 0
                    ? `${response[0]} subCategories updated`
                    : "Cannot update new subCategories/ subCategories ID not found",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const deleteSubCate = (scid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.subCategories.destroy({
                where: {id: scid},
            });
            resolve({
                err: response > 0 ? 0 : 1,
                mes: `${response} deleted`,
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    subcate,
    createSubCate,
    updateSubCate,
    deleteSubCate,
}