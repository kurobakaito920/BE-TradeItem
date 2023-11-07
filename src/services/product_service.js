import db from "../models/index.js";

const product = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await db.Products.findAll({
                include:[
                    {
                        model: db.subCategories,
                        attributes:{
                            exclude: ["createdAt", "updatedAt"]
                        }
                    },
                    {
                        model: db.Categories,
                        attributes:{
                            exclude: ["createdAt", "updatedAt"]
                        }
                    }
                ],
                attributes: {
                    exclude: ["createdAt", "updatedAt", "categoryID", "subCategoryID"]
                }
            });
            resolve(product);
        } catch (error) {
            reject(error);
        }
    });
}

const createProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Products.findOrCreate({
                where: {
                    nameProduct: data.nameProduct
                },
                defaults:{
                    id: data.id,
                    subCategoryID: data.subCategoryID,
                    categoryID: data.categoryID,
                    nameProduct: data.nameProduct,
                    imgProduct: data.imgProduct,
                    pricesProduct: data.pricesProduct,
                    status: data.status,
                    imgSlide1: data.imgSlide1,
                    imgSlide2: data.imgSlide2,
                    imgSlide3: data.imgSlide3,
                    imgSlide4: data.imgSlide4,
                }
            });
            resolve({
                status: response[1] ? 0 : 1,
                msg: response[1] ? "Created" : "product has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateProduct = (pid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Products.update({
                subCategoryID: data.subCategoryID,
                categoryID: data.categoryID,
                nameProduct: data.nameProduct,
                imgProduct: data.imgProduct,
                pricesProduct: data.pricesProduct,
                status: data.status,
                imgSlide1: data.imgSlide1,
                imgSlide2: data.imgSlide2,
                imgSlide3: data.imgSlide3,
                imgSlide4: data.imgSlide4,
            }, 
            {
                where: {id: pid}
            });
            resolve({
                err: response[0] > 0 ? 0 : 1,
                mes:
                  response[0] > 0
                    ? `${response[0]} Product updated`
                    : "Cannot update new Product/ Product ID not found",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const deleteProduct = (pid) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Products.destroy({
                where: {id: pid}
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
    product,
    createProduct,
    updateProduct,
    deleteProduct,
}