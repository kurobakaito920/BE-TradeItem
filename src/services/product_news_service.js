import db from "../models/index.js";

const productNews = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const prodNews = await db.productNews.findAll({
                include: [
                    {
                        model: db.Products,
                        attributes: {
                            exclude: ["createAt", "updateAt"]
                        }
                    },
                    {
                        model: db.News,
                        attributes: {
                            exclude: ["createAt", "updateAt"]
                        }
                    },
                    {
                        model: db.Users,
                        attributes: {
                            exclude: ["createAt", "updateAt"]
                        }
                    }
                ],
                attributes: {
                    exclude: ["createAt", "updateAt", "productID", "newsID", "userID"]
                }
            });
            resolve(prodNews)
        } catch (error) {
            reject(error);
        }
    });
}

const createProdNews = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.productNews.create({
               id: data.id,
               productID: data.productID,
               newsID: data.newsID,
               userID: data.userID 
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Created" : "product_news has been created",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const updateProdNews = (upid, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.productNews.update({
                productID: data.productID,
                newsID: data.newsID,
                userID: data.userID
            },{
                where: {id: upid}
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Updated" : "product_news has been updated",
              });
        } catch (error) {
            reject(error);
        }
    });
}

const deleteProdNews = (upid) => {
    return new Promise(async (resolve, reject) =>{
        try {
            const response = await db.productNews.destroy({
                where: {id: upid}
            });
            resolve({
                status: response[1]? 0 : 1,
                msg: response[1]? "Deleted" : "product_news has been deleted",
              });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    productNews,
    createProdNews,
    updateProdNews,
    deleteProdNews
}